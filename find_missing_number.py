# The first thing made is the function that will receive two lists that are to be annalysed
def find_missing(list1, list2):
  # The next step is to find out if the lists are empty, if they are empty, then an ouput that has nothing is returned.
  if len(list1) == 0 and len(list2) == 0:
    return 0
  # if the lists are checked and found to be similar, then an output that has nothing is returned.
  elif list1 == list2:
    return 0 

  # If the first list is greater than the second, then create sets and return the positive difference between the sets
  elif len(list1) > len(list2):
    return (list(set(list1)-set(list2))).pop()

  # If the second list is greater than the first, then create sets and return the positive difference between the sets
  else:
    return (list(set(list2)-set(list1))).pop()
