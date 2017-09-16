grammar SqlMap;

root: sqlDef*;

sqlDef: defLine (includeLine | textLine)+;

defLine: sqlType sqlId ':' NL;

includeLine: include sqlId NL;

textLine: (TEXT | param)*? NL;

sqlType: SQLTYPE;

include: INCLUDE;

param: PARAM;

sqlId: SQLID;

SQLTYPE: '#' ('select' | 'update' | 'insert' | 'delete' | 'sql');

INCLUDE: '#' 'include';

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

WS: [ \t]+ -> skip;

 