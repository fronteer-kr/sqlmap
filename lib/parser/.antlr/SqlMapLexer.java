// Generated from c:\Code\sqlmap\lib\parser\SqlMap.g4 by ANTLR 4.7
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SqlMapLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, SQLTYPE=2, INCLUDE=3, PARAM=4, SQLID=5, ID=6, TEXT=7, NL=8, WS=9;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "SQLTYPE", "INCLUDE", "PARAM", "SQLID", "ID", "TEXT", "ID_LETTER", 
		"DIGIT", "NL", "WS"
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


	public SqlMapLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SqlMap.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\13\u008d\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\3\2\3\2\3\3\7\3\35\n\3\f\3\16\3 \13\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3B\n\3\3\3\6\3E\n\3\r\3\16"+
		"\3F\3\4\7\4J\n\4\f\4\16\4M\13\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\6\4Y\n\4\r\4\16\4Z\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\5\5j\n\5\3\6\3\6\3\6\7\6o\n\6\f\6\16\6r\13\6\3\7\3\7\3\7\7\7w\n\7"+
		"\f\7\16\7z\13\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\5\13\u0083\n\13\3\13\3\13"+
		"\3\f\6\f\u0088\n\f\r\f\16\f\u0089\3\f\3\f\2\2\r\3\3\5\4\7\5\t\6\13\7\r"+
		"\b\17\t\21\2\23\2\25\n\27\13\3\2\6\4\2\f\f\17\17\5\2C\\aac|\3\2\62;\4"+
		"\2\13\13\"\"\2\u009a\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\3\31\3"+
		"\2\2\2\5\36\3\2\2\2\7K\3\2\2\2\ti\3\2\2\2\13k\3\2\2\2\rs\3\2\2\2\17{\3"+
		"\2\2\2\21}\3\2\2\2\23\177\3\2\2\2\25\u0082\3\2\2\2\27\u0087\3\2\2\2\31"+
		"\32\7<\2\2\32\4\3\2\2\2\33\35\5\27\f\2\34\33\3\2\2\2\35 \3\2\2\2\36\34"+
		"\3\2\2\2\36\37\3\2\2\2\37A\3\2\2\2 \36\3\2\2\2!\"\7%\2\2\"#\7u\2\2#$\7"+
		"g\2\2$%\7n\2\2%&\7g\2\2&\'\7e\2\2\'B\7v\2\2()\7%\2\2)*\7w\2\2*+\7r\2\2"+
		"+,\7f\2\2,-\7c\2\2-.\7v\2\2.B\7g\2\2/\60\7%\2\2\60\61\7k\2\2\61\62\7p"+
		"\2\2\62\63\7u\2\2\63\64\7g\2\2\64\65\7t\2\2\65B\7v\2\2\66\67\7%\2\2\67"+
		"8\7f\2\289\7g\2\29:\7n\2\2:;\7g\2\2;<\7v\2\2<B\7g\2\2=>\7%\2\2>?\7u\2"+
		"\2?@\7s\2\2@B\7n\2\2A!\3\2\2\2A(\3\2\2\2A/\3\2\2\2A\66\3\2\2\2A=\3\2\2"+
		"\2BD\3\2\2\2CE\5\27\f\2DC\3\2\2\2EF\3\2\2\2FD\3\2\2\2FG\3\2\2\2G\6\3\2"+
		"\2\2HJ\5\27\f\2IH\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2LN\3\2\2\2MK\3"+
		"\2\2\2NO\7%\2\2OP\7k\2\2PQ\7p\2\2QR\7e\2\2RS\7n\2\2ST\7w\2\2TU\7f\2\2"+
		"UV\7g\2\2VX\3\2\2\2WY\5\27\f\2XW\3\2\2\2YZ\3\2\2\2ZX\3\2\2\2Z[\3\2\2\2"+
		"[\b\3\2\2\2\\]\5\13\6\2]^\7A\2\2^j\3\2\2\2_`\5\13\6\2`a\7A\2\2ab\7A\2"+
		"\2bj\3\2\2\2cd\7A\2\2dj\5\13\6\2ef\7A\2\2fg\7A\2\2gh\3\2\2\2hj\5\13\6"+
		"\2i\\\3\2\2\2i_\3\2\2\2ic\3\2\2\2ie\3\2\2\2j\n\3\2\2\2kp\5\r\7\2lm\7\60"+
		"\2\2mo\5\r\7\2nl\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2q\f\3\2\2\2rp\3"+
		"\2\2\2sx\5\21\t\2tw\5\21\t\2uw\5\23\n\2vt\3\2\2\2vu\3\2\2\2wz\3\2\2\2"+
		"xv\3\2\2\2xy\3\2\2\2y\16\3\2\2\2zx\3\2\2\2{|\n\2\2\2|\20\3\2\2\2}~\t\3"+
		"\2\2~\22\3\2\2\2\177\u0080\t\4\2\2\u0080\24\3\2\2\2\u0081\u0083\7\17\2"+
		"\2\u0082\u0081\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085"+
		"\7\f\2\2\u0085\26\3\2\2\2\u0086\u0088\t\5\2\2\u0087\u0086\3\2\2\2\u0088"+
		"\u0089\3\2\2\2\u0089\u0087\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u008b\3\2"+
		"\2\2\u008b\u008c\b\f\2\2\u008c\30\3\2\2\2\16\2\36AFKZipvx\u0082\u0089"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}