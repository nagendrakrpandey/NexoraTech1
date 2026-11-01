import os
from PIL import Image

src_path = r"C:\Users\Ashish Monga\.gemini\antigravity-ide\brain\18c07253-16b4-4823-9d1b-88f669b105d1\.user_uploaded\media_1792951561113.png"
out_dir = r"d:\NEXORATECH\public\assets\logo"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src_path).convert("RGBA")
w, h = img.size

# Function to remove white background with smooth alpha feathering
def make_transparent(source_img, dark_mode=False):
    src_rgba = source_img.convert("RGBA")
    data = src_rgba.getdata()
    new_data = []
    
    for item in data:
        r, g, b, a = item
        # If near white background
        if r > 240 and g > 240 and b > 240:
            diff = 255 - max(r, g, b)
            alpha = int((diff / 15.0) * 255) if diff < 15 else 0
            new_data.append((r, g, b, alpha))
        else:
            if dark_mode:
                # If dark navy text, make it crisp white
                if r < 35 and g < 45 and b < 70 and not (b > 120 and g > 100):
                    new_data.append((248, 250, 252, a))
                else:
                    new_data.append(item)
            else:
                new_data.append(item)
                
    result = Image.new("RGBA", source_img.size)
    result.putdata(new_data)
    return result

# 1. Tightly cropped stacked logo (content box: 195, 71, 830, 449)
pad = 4
box_stacked = (max(0, 195 - pad), max(0, 71 - pad), min(w, 830 + pad), min(h, 449 + pad))
cropped_stacked = img.crop(box_stacked)

trans_stacked = make_transparent(cropped_stacked, dark_mode=False)
trans_stacked.save(os.path.join(out_dir, "nexora-logo-tight.png"), "PNG")

trans_stacked_dark = make_transparent(cropped_stacked, dark_mode=True)
trans_stacked_dark.save(os.path.join(out_dir, "nexora-logo-tight-dark.png"), "PNG")
print("Saved tight stacked logos:", trans_stacked.size)

# Also update the default nexora-logo-transparent.png to this tight version so no wasted padding exists anywhere!
trans_stacked.save(os.path.join(out_dir, "nexora-logo-transparent.png"), "PNG")
trans_stacked_dark.save(os.path.join(out_dir, "nexora-logo-dark.png"), "PNG")

# 2. Extract Emblem tightly
# Emblem box in original image: x from 340+12-2 to 340+309+2 = 350 to 651, y from 71+5-2 to 71+263+2 = 74 to 336
box_emblem = (350, 74, 651, 336)
cropped_emblem = img.crop(box_emblem)
trans_emblem = make_transparent(cropped_emblem, dark_mode=False)
trans_emblem.save(os.path.join(out_dir, "nexora-emblem.png"), "PNG")
print("Saved emblem:", trans_emblem.size)

# 3. Extract Text tightly
# Text box in original image: x from 195 to 830, y from 337 to 449
box_text = (195, 337, 830, 449)
cropped_text = img.crop(box_text)
trans_text_light = make_transparent(cropped_text, dark_mode=False)
trans_text_light.save(os.path.join(out_dir, "nexora-text.png"), "PNG")

trans_text_dark = make_transparent(cropped_text, dark_mode=True)
trans_text_dark.save(os.path.join(out_dir, "nexora-text-dark.png"), "PNG")
print("Saved text:", trans_text_light.size)

# 4. Create High-Resolution Horizontal Lockup!
# Place Emblem on Left, Text on Right, perfectly vertically centered!
# Emblem height: 262px, Text height: 112px
target_h = 262
emb_w, emb_h = trans_emblem.size
txt_w, txt_h = trans_text_light.size

# Scale text to proportionally match emblem height for maximum clarity
# If text is scaled so its height is ~140px, width becomes ~140 / 112 * 635 = 794px
scale_factor = 1.35
new_txt_w = int(txt_w * scale_factor)
new_txt_h = int(txt_h * scale_factor)

scaled_txt_light = trans_text_light.resize((new_txt_w, new_txt_h), Image.Resampling.LANCZOS)
scaled_txt_dark = trans_text_dark.resize((new_txt_w, new_txt_h), Image.Resampling.LANCZOS)

gap = 35
total_w = emb_w + gap + new_txt_w
total_h = max(emb_h, new_txt_h) + 10

# Create Light Horizontal
horiz_light = Image.new("RGBA", (total_w, total_h), (0, 0, 0, 0))
horiz_light.paste(trans_emblem, (0, (total_h - emb_h) // 2), trans_emblem)
horiz_light.paste(scaled_txt_light, (emb_w + gap, (total_h - new_txt_h) // 2 + 5), scaled_txt_light)
horiz_light.save(os.path.join(out_dir, "nexora-logo-horizontal.png"), "PNG")
print("Saved horizontal logo:", horiz_light.size)

# Create Dark Horizontal
horiz_dark = Image.new("RGBA", (total_w, total_h), (0, 0, 0, 0))
horiz_dark.paste(trans_emblem, (0, (total_h - emb_h) // 2), trans_emblem)
horiz_dark.paste(scaled_txt_dark, (emb_w + gap, (total_h - new_txt_h) // 2 + 5), scaled_txt_dark)
horiz_dark.save(os.path.join(out_dir, "nexora-logo-horizontal-dark.png"), "PNG")
print("Saved horizontal dark logo:", horiz_dark.size)

print("All logo variations generated successfully!")
