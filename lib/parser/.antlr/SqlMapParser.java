// Generated from c:\Code\dib\src\parser\SqlMap.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SqlMapParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, SQLTYPE=2, INCLUDE=3, PARAM=4, SQLID=5, ID=6, TEXT=7, NL=8, WS=9;
	public static final int
		RULE_root = 0, RULE_sqlDef = 1, RULE_defLine = 2, RULE_includeLine = 3, 
		RULE_textLine = 4, RULE_sqlType = 5, RULE_include = 6, RULE_param = 7, 
		RULE_sqlId = 8;
	public static final String[] ruleNames = {
		"root", "sqlDef", "defLine", "includeLine", "textLine", "sqlType", "include", 
		"param", "sqlId"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "':'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, "SQLTYPE", "INCLUDE", "PARAM", "SQLID", "ID", "TEXT", "NL", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SqlMap.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SqlMapParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RootContext extends ParserRuleContext {
		public List<SqlDefContext> sqlDef() {
			return getRuleContexts(SqlDefContext.class);
		}
		public SqlDefContext sqlDef(int i) {
			return getRuleContext(SqlDefContext.class,i);
		}
		public RootContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_root; }
	}

	public final RootContext root() throws RecognitionException {
		RootContext _localctx = new RootContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_root);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SQLTYPE) {
				{
				{
				setState(18);
				sqlDef();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlDefContext extends ParserRuleContext {
		public DefLineContext defLine() {
			return getRuleContext(DefLineContext.class,0);
		}
		public List<IncludeLineContext> includeLine() {
			return getRuleContexts(IncludeLineContext.class);
		}
		public IncludeLineContext includeLine(int i) {
			return getRuleContext(IncludeLineContext.class,i);
		}
		public List<TextLineContext> textLine() {
			return getRuleContexts(TextLineContext.class);
		}
		public TextLineContext textLine(int i) {
			return getRuleContext(TextLineContext.class,i);
		}
		public SqlDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlDef; }
	}

	public final SqlDefContext sqlDef() throws RecognitionException {
		SqlDefContext _localctx = new SqlDefContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sqlDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			defLine();
			setState(27); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(27);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case INCLUDE:
					{
					setState(25);
					includeLine();
					}
					break;
				case PARAM:
				case TEXT:
				case NL:
					{
					setState(26);
					textLine();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(29); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INCLUDE) | (1L << PARAM) | (1L << TEXT) | (1L << NL))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefLineContext extends ParserRuleContext {
		public SqlTypeContext sqlType() {
			return getRuleContext(SqlTypeContext.class,0);
		}
		public SqlIdContext sqlId() {
			return getRuleContext(SqlIdContext.class,0);
		}
		public TerminalNode NL() { return getToken(SqlMapParser.NL, 0); }
		public DefLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defLine; }
	}

	public final DefLineContext defLine() throws RecognitionException {
		DefLineContext _localctx = new DefLineContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_defLine);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			sqlType();
			setState(32);
			sqlId();
			setState(33);
			match(T__0);
			setState(34);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IncludeLineContext extends ParserRuleContext {
		public IncludeContext include() {
			return getRuleContext(IncludeContext.class,0);
		}
		public SqlIdContext sqlId() {
			return getRuleContext(SqlIdContext.class,0);
		}
		public TerminalNode NL() { return getToken(SqlMapParser.NL, 0); }
		public IncludeLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_includeLine; }
	}

	public final IncludeLineContext includeLine() throws RecognitionException {
		IncludeLineContext _localctx = new IncludeLineContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_includeLine);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			include();
			setState(37);
			sqlId();
			setState(38);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TextLineContext extends ParserRuleContext {
		public TerminalNode NL() { return getToken(SqlMapParser.NL, 0); }
		public List<TerminalNode> TEXT() { return getTokens(SqlMapParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(SqlMapParser.TEXT, i);
		}
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public TextLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_textLine; }
	}

	public final TextLineContext textLine() throws RecognitionException {
		TextLineContext _localctx = new TextLineContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_textLine);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					setState(42);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case TEXT:
						{
						setState(40);
						match(TEXT);
						}
						break;
					case PARAM:
						{
						setState(41);
						param();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(46);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			setState(47);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlTypeContext extends ParserRuleContext {
		public TerminalNode SQLTYPE() { return getToken(SqlMapParser.SQLTYPE, 0); }
		public SqlTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlType; }
	}

	public final SqlTypeContext sqlType() throws RecognitionException {
		SqlTypeContext _localctx = new SqlTypeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_sqlType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(SQLTYPE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IncludeContext extends ParserRuleContext {
		public TerminalNode INCLUDE() { return getToken(SqlMapParser.INCLUDE, 0); }
		public IncludeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_include; }
	}

	public final IncludeContext include() throws RecognitionException {
		IncludeContext _localctx = new IncludeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_include);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(INCLUDE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamContext extends ParserRuleContext {
		public TerminalNode PARAM() { return getToken(SqlMapParser.PARAM, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(PARAM);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SqlIdContext extends ParserRuleContext {
		public TerminalNode SQLID() { return getToken(SqlMapParser.SQLID, 0); }
		public SqlIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sqlId; }
	}

	public final SqlIdContext sqlId() throws RecognitionException {
		SqlIdContext _localctx = new SqlIdContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_sqlId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(SQLID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\13<\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\7\2\26"+
		"\n\2\f\2\16\2\31\13\2\3\3\3\3\3\3\6\3\36\n\3\r\3\16\3\37\3\4\3\4\3\4\3"+
		"\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\7\6-\n\6\f\6\16\6\60\13\6\3\6\3\6\3\7\3"+
		"\7\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3.\2\13\2\4\6\b\n\f\16\20\22\2\2\2\67\2"+
		"\27\3\2\2\2\4\32\3\2\2\2\6!\3\2\2\2\b&\3\2\2\2\n.\3\2\2\2\f\63\3\2\2\2"+
		"\16\65\3\2\2\2\20\67\3\2\2\2\229\3\2\2\2\24\26\5\4\3\2\25\24\3\2\2\2\26"+
		"\31\3\2\2\2\27\25\3\2\2\2\27\30\3\2\2\2\30\3\3\2\2\2\31\27\3\2\2\2\32"+
		"\35\5\6\4\2\33\36\5\b\5\2\34\36\5\n\6\2\35\33\3\2\2\2\35\34\3\2\2\2\36"+
		"\37\3\2\2\2\37\35\3\2\2\2\37 \3\2\2\2 \5\3\2\2\2!\"\5\f\7\2\"#\5\22\n"+
		"\2#$\7\3\2\2$%\7\n\2\2%\7\3\2\2\2&\'\5\16\b\2\'(\5\22\n\2()\7\n\2\2)\t"+
		"\3\2\2\2*-\7\t\2\2+-\5\20\t\2,*\3\2\2\2,+\3\2\2\2-\60\3\2\2\2./\3\2\2"+
		"\2.,\3\2\2\2/\61\3\2\2\2\60.\3\2\2\2\61\62\7\n\2\2\62\13\3\2\2\2\63\64"+
		"\7\4\2\2\64\r\3\2\2\2\65\66\7\5\2\2\66\17\3\2\2\2\678\7\6\2\28\21\3\2"+
		"\2\29:\7\7\2\2:\23\3\2\2\2\7\27\35\37,.";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}