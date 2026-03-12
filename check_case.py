import os
import re
from pathlib import Path

def check_imports():
    src_dir = Path('src')
    import_pattern = re.compile(r'import\s+.*?from\s+[\'"]([^\'"]+)[\'"]')
    dynamic_import_pattern = re.compile(r'import\([\'"]([^\'"]+)[\'"]\)')
    
    mismatches = []

    for file_path in src_dir.rglob('*'):
        if file_path.is_file() and file_path.suffix in ['.jsx', '.js', '.tsx', '.ts']:
            try:
                content = file_path.read_text(encoding='utf-8')
            except Exception:
                continue
                
            # Find all import paths
            imports = import_pattern.findall(content) + dynamic_import_pattern.findall(content)
            
            for imp in imports:
                if imp.startswith('.'):
                    # Resolve relative path
                    target_path = (file_path.parent / imp).resolve()
                    
                    # Check if file exists (Windows ignores case here)
                    if target_path.exists() or Path(str(target_path) + '.js').exists() or Path(str(target_path) + '.jsx').exists() or Path(str(target_path) + '.ts').exists() or Path(str(target_path) + '.tsx').exists() or Path(str(target_path) + '.css').exists() or Path(str(target_path) + '/index.js').exists() or Path(str(target_path) + '/index.jsx').exists():
                        
                        # Now resolve the true case path
                        try:
                            # If target is a directory or file without extension
                            actual_target = None
                            for ext in ['', '.js', '.jsx', '.ts', '.tsx', '.css', '/index.js', '/index.jsx']:
                                test_path = Path(str(target_path) + ext)
                                if test_path.exists():
                                    actual_target = test_path
                                    break
                            
                            if not actual_target:
                                continue

                            # Traverse up and check true case using os.listdir
                            parts = actual_target.parts
                            current = Path(parts[0])
                            for part in parts[1:]:
                                true_name = next((n for n in os.listdir(current) if n.lower() == part.lower()), None)
                                if true_name != part:
                                    mismatches.append(f"In {file_path}: Import '{imp}' expects '{part}' but actual is '{true_name}'")
                                    break
                                current = current / true_name
                        except Exception as e:
                            pass
                            
    if mismatches:
        print("Mismatches found:")
        for m in mismatches:
            print(m)
    else:
        print("No mismatches found!")

if __name__ == '__main__':
    check_imports()
