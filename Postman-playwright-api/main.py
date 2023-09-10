import argparse, srsly
from util import folder_checker, folder_creator
from parser import parser_test

parser = argparse.ArgumentParser(description="I/O file argument parser")

parser.add_argument("--input", type=str, help="Input Json File", required=True)
# parser.add_argument("--output", type=str, help="Output File", required=True)

args = parser.parse_args()
# print(args.input)
input_file = srsly.read_json(path=args.input)
folder_checker()
for item in input_file.get('item'):
    # Grouping Name
    if 'item' in item:
        for sub_item in item['item']:
            if 'item' in sub_item:
                for more_sub_item in sub_item['item']:
                    parsers = parser_test(more_sub_item)
                    path = folder_creator(more_sub_item['name'][1:])
                    with open(path+".spec.ts","w") as file:
                        file.write(parsers)
            else:
                print(sub_item['name'])
                parsers = parser_test(sub_item)
                path = folder_creator(sub_item['name'][1:])
                with open(path+".spec.ts","w") as file:
                    file.write(parsers)
    else:
        print(item['name'])
        parsers = parser_test(item)
        path = folder_creator(item['name'][1:])
        with open(path+".spec.ts","w") as file:
            file.write(parsers)
        


