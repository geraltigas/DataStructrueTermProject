# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


# Press the green button in the gutter to run the script.

import json

class News:
    def __init__(self, content , time):
        self.content = content
        self.time = time



if __name__ == '__main__':
    print('this is spider python script.')
    array = {News("1111","1"),News("2222","2"),News("3333","3")}
    print(json.dumps(array))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
