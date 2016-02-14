#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys, re
from pyPdf import PdfFileReader


f = open('book.pdf', 'rb')
reader = PdfFileReader(f)
contents = ''
for i in range(89, 289):
  contents += reader.getPage(i).extractText().encode('utf-8')
  contents += "\n"

# Fix library's bad parsing
contents = re.sub("˜", "fi", contents);
contents = re.sub("Œ", "–", contents);
contents = re.sub("™", "’", contents);
contents = re.sub("ﬁ", "“", contents);
contents = re.sub("ﬂ", "”", contents);
contents = re.sub("Š", "—", contents);
contents = re.sub("˛", "ff", contents);
contents = re.sub("˙", "nl", contents);
contents = re.sub("˚", "fl", contents);

# Lots of line-breaks on these
contents = re.sub(r"(\n-\n)|(\n-)|(-\n)", "-", contents);
contents = re.sub(r"(?<=\n\d\. )\n", " ", contents);
contents = re.sub("»\n", "» ", contents);

# Remove headings that split pages
contents = re.sub(r"\|.+", "", contents);
contents = re.sub(r"(Cracking the Coding Interview)|(CareerCup\.com)", "", contents);

#contents = re.sub(r"\n+?\s+", "\n", contents)
#sys.exit(0)
# .encode('utf-8')
# print contents
# exit
g = open('parsed.txt', 'w')
#for character in contents:
#  sys.stdout.write(character)
#  sys.stdout.flush()
g.write(contents)
f.close()
g.close()
