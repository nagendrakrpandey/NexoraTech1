import os
import shutil
from PIL import Image

src_logo = r"C:\Users\Ashish Monga\.gemini\antigravity-ide\brain\18c07253-16b4-4823-9d1b-88f669b105d1\.user_uploaded\media_1792951561113.png"
out_dir = r"d:\NEXORATECH\public\assets\logo"
os.makedirs(out_dir, exist_ok=True)

# Copy original
shutil.copy2(src_logo, os.path.join(out_dir, "nexora-logo-original.png"))

# Open image
img = Image.open(src_logo).convert("RGBA")
width, height = img.size
print(f"Original logo size: {width}x{height}")

# Process transparent version
# Since background is pure white #ffffff or near white, make background transparent
# with smooth alpha antialiasing
data = img.getdata()
new_data_transparent = []
new_data_dark = []

for item in data:
    r, g, b, a = item
    # Check if pixel is white or near-white background
    if r > 240 and g > 240 and b > 240:
        # Fade out edge pixels smoothly
        diff = 255 - max(r, g, b)
        alpha = int((diff / 15.0) * 255) if diff < 15 else 0
        new_data_transparent.append((r, g, b, alpha))
        new_data_dark.append((r, g, b, alpha))
    else:
        new_data_transparent.append(item)
        
        # In dark mode version, if text is dark navy/black (Nexora and Building Smarter Tomorrow),
        # convert it to clean crisp white/silver, while keeping the vibrant cyan and blue arrow/emblem!
        # Let's detect if pixel is dark navy/black (r < 40, g < 40, b < 60)
        if r < 35 and g < 45 and b < 70 and not (b > 120 and g > 100): # dark navy text
            # Make it clean crisp white/slate-100
            new_data_dark.append((248, 250, 252, a))
        else:
            new_data_dark.append(item)

# Save transparent version
img_trans = Image.new("RGBA", (width, height))
img_trans.putdata(new_data_transparent)
# Trim bounding box
bbox = img_trans.getbbox()
if bbox:
    # Add small padding
    pad = 20
    crop_box = (
        max(0, bbox[0] - pad),
        max(0, bbox[1] - pad),
        min(width, bbox[2] + pad),
        min(height, bbox[3] + pad)
    )
    img_trans_cropped = img_trans.crop(crop_box)
    img_trans_cropped.save(os.path.join(out_dir, "nexora-logo-transparent.png"), "PNG")
    print(f"Saved transparent logo: {img_trans_cropped.size}")

# Save dark theme version
img_dark = Image.new("RGBA", (width, height))
img_dark.putdata(new_data_dark)
if bbox:
    img_dark_cropped = img_dark.crop(crop_box)
    img_dark_cropped.save(os.path.join(out_dir, "nexora-logo-dark.png"), "PNG")
    print(f"Saved dark mode logo: {img_dark_cropped.size}")

# Extract emblem icon only
# The emblem is in the upper 70% of the cropped area
emblem_box = (
    bbox[0],
    bbox[1],
    bbox[2],
    int(bbox[1] + (bbox[3] - bbox[1]) * 0.72)
)
# Specifically find the emblem bounds
img_icon = img_trans.crop(emblem_box)
icon_bbox = img_icon.getbbox()
if icon_bbox:
    img_icon = img_icon.crop(icon_bbox)
    # make square
    max_dim = max(img_icon.width, img_icon.height) + 20
    square_icon = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
    offset = ((max_dim - img_icon.width) // 2, (max_dim - img_icon.height) // 2)
    square_icon.paste(img_icon, offset)
    square_icon.save(os.path.join(out_dir, "nexora-icon.png"), "PNG")
    
    # Save favicon
    fav = square_icon.resize((64, 64), Image.Resampling.LANCZOS)
    fav.save(r"d:\NEXORATECH\public\favicon.ico", format="ICO")
    fav.save(r"d:\NEXORATECH\public\favicon.png", format="PNG")
    print(f"Saved icon and favicon!")
