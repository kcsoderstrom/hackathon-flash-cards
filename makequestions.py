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
contents = re.sub(r"^\n+", "", contents);

# Remove headings that split pages
contents = re.sub(r"\|.+", "", contents);
contents = re.sub(r"(Cracking the Coding Interview)|(CareerCup\.com)", "", contents);

# Build json
jsontents = re.split("\n\n\n+", contents)
jsontents = 'wwwwwwwwwwwwwwwwww'.join(jsontents)
jsontents = re.split("wwwwwwwwwwwwwwwwww|pg\s\d+", jsontents)
jsontents = [re.sub("^\s+|\s+$", "", str) for str in jsontents]
jsontents = [str for str in jsontents if len(str) != 0]
asjson = []
for idx, val in enumerate(jsontents):
	if(idx % 2 == 0 and idx < len(jsontents) - 1):
		asjson.append({
			"id": idx,
			"question": re.sub("^\s+|\s+$", "", jsontents[idx]),
			"answer": re.sub("^\s+|\s+$", "", jsontents[idx + 1])
		})
jsonstr = json.dumps(asjson)

g = open('parsed.txt', 'w')
g.write(contents)

h = open('parsed.json', 'w')
h.write(jsonstr)

f.close()
g.close()
h.close()
