#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys, re, json
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

# Build json
jsontents = re.split("\n\n(?=[.|\n]+?pg\s\d+)|pg\s\d+", contents)
asjson = []
for idx, val in enumerate(jsontents):
	if(idx % 2 == 0 and idx < len(jsontents) - 1):
		asjson.append({
			"question": jsontents[idx],
			"answer": jsontents[idx + 1]
		})
jsonstr = json.dumps(asjson)

g = open('parsed.txt', 'w')
g.write(contents)

h = open('parsed.json', 'w')
h.write(jsonstr)

f.close()
g.close()
h.close()
