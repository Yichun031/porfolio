import os
from PIL import Image, ImageOps

IMG_DIR = "/app/frontend/public/images"
MAX_DIM = 1600
QUALITY = 82

total_before = 0
total_after = 0
rows = []

for name in sorted(os.listdir(IMG_DIR)):
    path = os.path.join(IMG_DIR, name)
    if not os.path.isfile(path):
        continue
    ext = name.lower().rsplit(".", 1)[-1]
    if ext not in ("png", "jpg", "jpeg", "webp"):
        continue
    before = os.path.getsize(path)
    try:
        img = Image.open(path)
        img = ImageOps.exif_transpose(img)
        # preserve alpha where present, else RGB
        if img.mode in ("P", "LA"):
            img = img.convert("RGBA")
        elif img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGB")
        w, h = img.size
        if max(w, h) > MAX_DIM:
            scale = MAX_DIM / max(w, h)
            img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
        tmp = path + ".tmp"
        img.save(tmp, "WEBP", quality=QUALITY, method=6)
        after = os.path.getsize(tmp)
        # only replace if smaller
        if after < before:
            os.replace(tmp, path)
        else:
            os.remove(tmp)
            after = before
    except Exception as e:
        print("SKIP", name, e)
        after = before
    total_before += before
    total_after += after
    rows.append((name, before, after))

for name, b, a in rows:
    print(f"{name:28s} {b/1024:8.1f}KB -> {a/1024:8.1f}KB  ({(1-a/b)*100:4.0f}% saved)")

print("-" * 60)
print(f"TOTAL {total_before/1024/1024:.2f}MB -> {total_after/1024/1024:.2f}MB  ({(1-total_after/total_before)*100:.0f}% saved)")
