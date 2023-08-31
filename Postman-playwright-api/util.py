import os
import shutil

def folder_checker(folder_name:str = "data"):
    if os.path.exists(folder_name):
        print(f"Folder '{folder_name}' available.")
        try:
            for filename in os.listdir(folder_name):
                file_path = os.path.join(folder_name, filename)
                if os.path.isfile(file_path):
                    os.remove(file_path)
                elif os.path.isdir(file_path):
                    shutil.rmtree(file_path)
            print("All data was deleted.")
        except Exception as e:
            print(f"Failed delete folder files: {e}")
    else:
        try:
            os.makedirs(folder_name)
            print(f"Folder '{folder_name}' was created.")
        except Exception as e:
            print(f"Failed create folder: {e}")


def folder_creator(folder_name:str):
    parsing_folder_name = folder_name.split("/")
    response_folder = []
    if len(parsing_folder_name) > 1:
        loop_folder = ""
        for index, item in enumerate(parsing_folder_name[:-1]):
            print(index)
            temp = []
            for indices, alpabet in enumerate(item):
                if alpabet.isupper():
                    temp.append(" ")
                    temp.append(alpabet)
                else:
                    if indices == 0:
                        temp.append(alpabet.upper())
                    else:
                        temp.append(alpabet)
            result_folder_name = "".join(temp)
            if not os.path.exists("data/"+loop_folder+""+result_folder_name):
                try:
                    os.makedirs("data/"+loop_folder+""+result_folder_name)
                    print(f"Folder data/'{result_folder_name}' was created.")
                except Exception as e:
                    print(f"Failed create folder: {e}")
            response_folder.append(result_folder_name)
            loop_folder += result_folder_name+"/"
    return "data/"+"/".join(response_folder)+"/"+parsing_folder_name[-1:][0]
            # modified_string = ' '.join([s.capitalize() for s in modified_string.split('([A-Z][a-z]+)')]) 

    # print(parsing_folder_name)
    # if os.path.exists(folder_name):
    #     print(f"Folder '{folder_name}' available.")
    #     try:
    #         for filename in os.listdir(folder_name):
    #             file_path = os.path.join(folder_name, filename)
    #             if os.path.isfile(file_path):
    #                 os.remove(file_path)
    #             elif os.path.isdir(file_path):
    #                 shutil.rmtree(file_path)
    #         print("All data was deleted.")
    #     except Exception as e:
    #         print(f"Failed delete folder files: {e}")
    # else:
    #     try:
    #         os.makedirs(folder_name)
    #         print(f"Folder '{folder_name}' was created.")
    #     except Exception as e:
    #         print(f"Failed create folder: {e}")