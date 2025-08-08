#  variable is a container for any kind of data
# once created, it can be reused all over and over again

# syntax : variableName = dataToStore
# variable names can only contain letters, numbers, and underscore symbols
# forbidden: $,%,space
# variable names must start with a letter or an underscore (numbers not allowed)
# variable names must be different from inbuilt python tools : e.g print

# varable names should make sense
#if long, and need space, you can use snake_case
#varibale names should be consistent

# data types describe what kind of data is inside our varibale
# we have four core basic types
# 1 - integer (int), 2- floats (float), 3- strings (str), 4- booleans (bool)

#integers are whole numbers (numbers without decimal points). they can be negative, positive or zero
#intergers are commonly used for counting, indexing in lists, loops(repeating of something)

age = 30
score = 0
temp = -5
print(type(temp))

#floats are decimal numbers (numbers with decimal points)
#floats are used in representing measurements, money, percentages etc
#floats are not always exact (due to binary representation)

pi = 3.14159
price = -19.99
print ( 0.1 + 0.2)
print(type(pi))

#strings are sequence of characters (text) enclosed in a single ' or double " quotes.

name = 'adam'
greet = "hello, adam"
print(len(name))
print(type(greet))

#booleans are logical values that are either True or False.
#it is usd in conditions checks, flags of code
had_eaten = False
had_prayed = True


#type casting
age = "25"
print(type(age))
age_int = int(age)
print(type(age_int))

height = float("5.2")
print(type(height))

num_str = str(123)
print(type(num_str))