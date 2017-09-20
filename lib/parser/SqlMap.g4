grammar SqlMap;

root: sqlDef* NL;

sqlDef: defLine (includeLine | textLine)+;

defLine: sqlType sqlId ':' NL;

includeLine: include sqlId NL;

include: INCLUDE;

textLine: (TEXT | SQLID | WS | param)*? NL;

sqlType: SQLTYPE;

param: PARAM;

sqlId: SQLID WS*;

SQLTYPE: WS* ('#select' | '#update' | '#insert' | '#delete' | '#sql') WS+;

INCLUDE: WS* '#include' WS+;

PARAM: SQLID '?'
    | SQLID '??'
    | '?' SQLID
    | '??' SQLID;

SQLID: ID ('.' ID)*;

ID: ID_LETTER (ID_LETTER | DIGIT)*;

TEXT: (~[\r\n]);

fragment ID_LETTER: [a-zA-Z_];

fragment DIGIT: [0-9];

NL: '\r'? '\n';

WS: (' ' | '\t' | EOF)+ -> skip;
 