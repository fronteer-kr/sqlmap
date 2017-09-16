// Generated from C:\Code\SqlMap\src\parser\SqlMap.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SqlMapListener = require('./SqlMapListener').SqlMapListener;
var SqlMapVisitor = require('./SqlMapVisitor').SqlMapVisitor;

var grammarFileName = "SqlMap.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000b<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0007\u0002\u0016\n\u0002",
    "\f\u0002\u000e\u0002\u0019\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003\u001e\n\u0003\r\u0003\u000e\u0003\u001f\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0007\u0006-\n\u0006",
    "\f\u0006\u000e\u00060\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0003.\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002",
    "\u0002\u00027\u0002\u0017\u0003\u0002\u0002\u0002\u0004\u001a\u0003",
    "\u0002\u0002\u0002\u0006!\u0003\u0002\u0002\u0002\b&\u0003\u0002\u0002",
    "\u0002\n.\u0003\u0002\u0002\u0002\f3\u0003\u0002\u0002\u0002\u000e5",
    "\u0003\u0002\u0002\u0002\u00107\u0003\u0002\u0002\u0002\u00129\u0003",
    "\u0002\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003",
    "\u0002\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0003\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001d\u0005",
    "\u0006\u0004\u0002\u001b\u001e\u0005\b\u0005\u0002\u001c\u001e\u0005",
    "\n\u0006\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001c\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003",
    "\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u0005\u0003\u0002",
    "\u0002\u0002!\"\u0005\f\u0007\u0002\"#\u0005\u0012\n\u0002#$\u0007\u0003",
    "\u0002\u0002$%\u0007\n\u0002\u0002%\u0007\u0003\u0002\u0002\u0002&\'",
    "\u0005\u000e\b\u0002\'(\u0005\u0012\n\u0002()\u0007\n\u0002\u0002)\t",
    "\u0003\u0002\u0002\u0002*-\u0007\t\u0002\u0002+-\u0005\u0010\t\u0002",
    ",*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/1\u0003\u0002",
    "\u0002\u00020.\u0003\u0002\u0002\u000212\u0007\n\u0002\u00022\u000b",
    "\u0003\u0002\u0002\u000234\u0007\u0004\u0002\u00024\r\u0003\u0002\u0002",
    "\u000256\u0007\u0005\u0002\u00026\u000f\u0003\u0002\u0002\u000278\u0007",
    "\u0006\u0002\u00028\u0011\u0003\u0002\u0002\u00029:\u0007\u0007\u0002",
    "\u0002:\u0013\u0003\u0002\u0002\u0002\u0007\u0017\u001d\u001f,."].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'" ];

var symbolicNames = [ null, null, "SQLTYPE", "INCLUDE", "PARAM", "SQLID", 
                      "ID", "TEXT", "NL", "WS" ];

var ruleNames =  [ "root", "sqlDef", "defLine", "includeLine", "textLine", 
                   "sqlType", "include", "param", "sqlId" ];

function SqlMapParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SqlMapParser.prototype = Object.create(antlr4.Parser.prototype);
SqlMapParser.prototype.constructor = SqlMapParser;

Object.defineProperty(SqlMapParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SqlMapParser.EOF = antlr4.Token.EOF;
SqlMapParser.T__0 = 1;
SqlMapParser.SQLTYPE = 2;
SqlMapParser.INCLUDE = 3;
SqlMapParser.PARAM = 4;
SqlMapParser.SQLID = 5;
SqlMapParser.ID = 6;
SqlMapParser.TEXT = 7;
SqlMapParser.NL = 8;
SqlMapParser.WS = 9;

SqlMapParser.RULE_root = 0;
SqlMapParser.RULE_sqlDef = 1;
SqlMapParser.RULE_defLine = 2;
SqlMapParser.RULE_includeLine = 3;
SqlMapParser.RULE_textLine = 4;
SqlMapParser.RULE_sqlType = 5;
SqlMapParser.RULE_include = 6;
SqlMapParser.RULE_param = 7;
SqlMapParser.RULE_sqlId = 8;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.sqlDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SqlDefContext);
    } else {
        return this.getTypedRuleContext(SqlDefContext,i);
    }
};

RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitRoot(this);
	}
};

RootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.RootContext = RootContext;

SqlMapParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SqlMapParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SqlMapParser.SQLTYPE) {
            this.state = 18;
            this.sqlDef();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_sqlDef;
    return this;
}

SqlDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlDefContext.prototype.constructor = SqlDefContext;

SqlDefContext.prototype.defLine = function() {
    return this.getTypedRuleContext(DefLineContext,0);
};

SqlDefContext.prototype.includeLine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeLineContext);
    } else {
        return this.getTypedRuleContext(IncludeLineContext,i);
    }
};

SqlDefContext.prototype.textLine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TextLineContext);
    } else {
        return this.getTypedRuleContext(TextLineContext,i);
    }
};

SqlDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterSqlDef(this);
	}
};

SqlDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitSqlDef(this);
	}
};

SqlDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitSqlDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.SqlDefContext = SqlDefContext;

SqlMapParser.prototype.sqlDef = function() {

    var localctx = new SqlDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SqlMapParser.RULE_sqlDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.defLine();
        this.state = 27; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 27;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case SqlMapParser.INCLUDE:
                this.state = 25;
                this.includeLine();
                break;
            case SqlMapParser.PARAM:
            case SqlMapParser.TEXT:
            case SqlMapParser.NL:
                this.state = 26;
                this.textLine();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 29; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlMapParser.INCLUDE) | (1 << SqlMapParser.PARAM) | (1 << SqlMapParser.TEXT) | (1 << SqlMapParser.NL))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_defLine;
    return this;
}

DefLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefLineContext.prototype.constructor = DefLineContext;

DefLineContext.prototype.sqlType = function() {
    return this.getTypedRuleContext(SqlTypeContext,0);
};

DefLineContext.prototype.sqlId = function() {
    return this.getTypedRuleContext(SqlIdContext,0);
};

DefLineContext.prototype.NL = function() {
    return this.getToken(SqlMapParser.NL, 0);
};

DefLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterDefLine(this);
	}
};

DefLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitDefLine(this);
	}
};

DefLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitDefLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.DefLineContext = DefLineContext;

SqlMapParser.prototype.defLine = function() {

    var localctx = new DefLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SqlMapParser.RULE_defLine);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.sqlType();
        this.state = 32;
        this.sqlId();
        this.state = 33;
        this.match(SqlMapParser.T__0);
        this.state = 34;
        this.match(SqlMapParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_includeLine;
    return this;
}

IncludeLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeLineContext.prototype.constructor = IncludeLineContext;

IncludeLineContext.prototype.include = function() {
    return this.getTypedRuleContext(IncludeContext,0);
};

IncludeLineContext.prototype.sqlId = function() {
    return this.getTypedRuleContext(SqlIdContext,0);
};

IncludeLineContext.prototype.NL = function() {
    return this.getToken(SqlMapParser.NL, 0);
};

IncludeLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterIncludeLine(this);
	}
};

IncludeLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitIncludeLine(this);
	}
};

IncludeLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitIncludeLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.IncludeLineContext = IncludeLineContext;

SqlMapParser.prototype.includeLine = function() {

    var localctx = new IncludeLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SqlMapParser.RULE_includeLine);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.include();
        this.state = 37;
        this.sqlId();
        this.state = 38;
        this.match(SqlMapParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TextLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_textLine;
    return this;
}

TextLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextLineContext.prototype.constructor = TextLineContext;

TextLineContext.prototype.NL = function() {
    return this.getToken(SqlMapParser.NL, 0);
};

TextLineContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SqlMapParser.TEXT);
    } else {
        return this.getToken(SqlMapParser.TEXT, i);
    }
};


TextLineContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

TextLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterTextLine(this);
	}
};

TextLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitTextLine(this);
	}
};

TextLineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitTextLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.TextLineContext = TextLineContext;

SqlMapParser.prototype.textLine = function() {

    var localctx = new TextLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SqlMapParser.RULE_textLine);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 42;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case SqlMapParser.TEXT:
                    this.state = 40;
                    this.match(SqlMapParser.TEXT);
                    break;
                case SqlMapParser.PARAM:
                    this.state = 41;
                    this.param();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 46;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 47;
        this.match(SqlMapParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_sqlType;
    return this;
}

SqlTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlTypeContext.prototype.constructor = SqlTypeContext;

SqlTypeContext.prototype.SQLTYPE = function() {
    return this.getToken(SqlMapParser.SQLTYPE, 0);
};

SqlTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterSqlType(this);
	}
};

SqlTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitSqlType(this);
	}
};

SqlTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitSqlType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.SqlTypeContext = SqlTypeContext;

SqlMapParser.prototype.sqlType = function() {

    var localctx = new SqlTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SqlMapParser.RULE_sqlType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(SqlMapParser.SQLTYPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_include;
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.INCLUDE = function() {
    return this.getToken(SqlMapParser.INCLUDE, 0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitInclude(this);
	}
};

IncludeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitInclude(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.IncludeContext = IncludeContext;

SqlMapParser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SqlMapParser.RULE_include);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(SqlMapParser.INCLUDE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.PARAM = function() {
    return this.getToken(SqlMapParser.PARAM, 0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitParam(this);
	}
};

ParamContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitParam(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.ParamContext = ParamContext;

SqlMapParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SqlMapParser.RULE_param);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(SqlMapParser.PARAM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SqlIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SqlMapParser.RULE_sqlId;
    return this;
}

SqlIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SqlIdContext.prototype.constructor = SqlIdContext;

SqlIdContext.prototype.SQLID = function() {
    return this.getToken(SqlMapParser.SQLID, 0);
};

SqlIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.enterSqlId(this);
	}
};

SqlIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SqlMapListener ) {
        listener.exitSqlId(this);
	}
};

SqlIdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SqlMapVisitor ) {
        return visitor.visitSqlId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SqlMapParser.SqlIdContext = SqlIdContext;

SqlMapParser.prototype.sqlId = function() {

    var localctx = new SqlIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SqlMapParser.RULE_sqlId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(SqlMapParser.SQLID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SqlMapParser = SqlMapParser;
