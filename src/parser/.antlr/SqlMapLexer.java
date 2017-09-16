// Generated from c:\Code\dib\src\parser\SqlMap.g4 by ANTLR 4.7
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\13s\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\38\n"+
		"\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\5\5P\n\5\3\6\3\6\3\6\7\6U\n\6\f\6\16\6X\13\6\3\7"+
		"\3\7\3\7\7\7]\n\7\f\7\16\7`\13\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\5\13i\n"+
		"\13\3\13\3\13\3\f\6\fn\n\f\r\f\16\fo\3\f\3\f\2\2\r\3\3\5\4\7\5\t\6\13"+
		"\7\r\b\17\t\21\2\23\2\25\n\27\13\3\2\6\4\2\f\f\17\17\5\2C\\aac|\3\2\62"+
		";\4\2\13\13\"\"\2|\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\3\31\3\2\2"+
		"\2\5\33\3\2\2\2\79\3\2\2\2\tO\3\2\2\2\13Q\3\2\2\2\rY\3\2\2\2\17a\3\2\2"+
		"\2\21c\3\2\2\2\23e\3\2\2\2\25h\3\2\2\2\27m\3\2\2\2\31\32\7<\2\2\32\4\3"+
		"\2\2\2\33\67\7%\2\2\34\35\7u\2\2\35\36\7g\2\2\36\37\7n\2\2\37 \7g\2\2"+
		" !\7e\2\2!8\7v\2\2\"#\7w\2\2#$\7r\2\2$%\7f\2\2%&\7c\2\2&\'\7v\2\2\'8\7"+
		"g\2\2()\7k\2\2)*\7p\2\2*+\7u\2\2+,\7g\2\2,-\7t\2\2-8\7v\2\2./\7f\2\2/"+
		"\60\7g\2\2\60\61\7n\2\2\61\62\7g\2\2\62\63\7v\2\2\638\7g\2\2\64\65\7u"+
		"\2\2\65\66\7s\2\2\668\7n\2\2\67\34\3\2\2\2\67\"\3\2\2\2\67(\3\2\2\2\67"+
		".\3\2\2\2\67\64\3\2\2\28\6\3\2\2\29:\7%\2\2:;\7k\2\2;<\7p\2\2<=\7e\2\2"+
		"=>\7n\2\2>?\7w\2\2?@\7f\2\2@A\7g\2\2A\b\3\2\2\2BC\5\13\6\2CD\7A\2\2DP"+
		"\3\2\2\2EF\5\13\6\2FG\7A\2\2GH\7A\2\2HP\3\2\2\2IJ\7A\2\2JP\5\13\6\2KL"+
		"\7A\2\2LM\7A\2\2MN\3\2\2\2NP\5\13\6\2OB\3\2\2\2OE\3\2\2\2OI\3\2\2\2OK"+
		"\3\2\2\2P\n\3\2\2\2QV\5\r\7\2RS\7\60\2\2SU\5\r\7\2TR\3\2\2\2UX\3\2\2\2"+
		"VT\3\2\2\2VW\3\2\2\2W\f\3\2\2\2XV\3\2\2\2Y^\5\21\t\2Z]\5\21\t\2[]\5\23"+
		"\n\2\\Z\3\2\2\2\\[\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_\16\3\2\2\2"+
		"`^\3\2\2\2ab\n\2\2\2b\20\3\2\2\2cd\t\3\2\2d\22\3\2\2\2ef\t\4\2\2f\24\3"+
		"\2\2\2gi\7\17\2\2hg\3\2\2\2hi\3\2\2\2ij\3\2\2\2jk\7\f\2\2k\26\3\2\2\2"+
		"ln\t\5\2\2ml\3\2\2\2no\3\2\2\2om\3\2\2\2op\3\2\2\2pq\3\2\2\2qr\b\f\2\2"+
		"r\30\3\2\2\2\n\2\67OV\\^ho\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}