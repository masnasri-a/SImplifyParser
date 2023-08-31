import json,re

pattern = r"'(.*?)'"
result_text = ""
with open('input.txt', 'r') as input_file:
    for item in input_file.readlines():
        if 'page.getByText' in item:
            matches = re.findall(pattern, item)
            if matches:
                text_inside_quotes = " ".join(matches[0].split(" ")[:3])  # Mengambil teks di dalam tanda kutip satu
                words = re.findall(r'\w+', text_inside_quotes)  # Memisahkan kata-kata dan menghilangkan simbol
                formatted_text = ''.join([word.capitalize() if idx < 3 else word for idx, word in enumerate(words)])
                formatted_text = formatted_text[0].lower() + formatted_text[1:]
                result_text += f"  const {formatted_text} = {item.replace('.click()','.textContent()')}"
                result_text += f"  expect({formatted_text}).toBe('{matches[0]}')\n"
        else:
            result_text += item
    print(result_text)