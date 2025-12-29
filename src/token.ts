// stores tokens and tokenkinds

/**  tokenkind
 * TODO: Rm PRINT once callee works
 * TokenKind unused kind rn which sucks
*/
export type TokenKind =
    | "LET" //
    | "PRINT" //
    | "AND" //
    | "OR" //
    | "NOT" //
    | "FUNC" //
    | "WHILE" //
    | "IF" //
    | "ELSE" //
    | "IDENT" //
    | "NUMBER" //
    | "STRING" //
    | "EQUAL" //
    | "ARROW" //
    | "NOTEQ" //
    | "BANG" //
    | "LT" //
    | "GT" //
    | "LTE" //
    | "GTE" //
    | "ASSIGN" //
    | "STAR_ASSIGN" //
    | "PLUS" //
    | "PLUS_ASSIGN"
    | "MINUS" //
    | "MINUS_ASSIGN" //
    | "STAR" //
    | "SLASH" //
    | "SLASH_ASSIGN" //
    | "LPAREN" //
    | "RPAREN" //
    | "LBRACE" //
    | "RBRACE" //
    | "LBRACKET" //
    | "RBRACKET" //
    | "COMMA" //
    | "DOT" //
    | "SEMICOLON" //
    | "COMMENT" //
    | "EOF" //

/** Token which contains the kind, the content, the raw content if a literal */
export type Token = {
    kind: TokenKind;
    lexeme: string;
    literal?: number | string; // parsed version of lexeme if a literal for SPEEEEEEED
};

/**  keeps track of keywords for the parser */
export const KEYWORDS: Record<string, TokenKind> = {
    let: "LET",
    print: "PRINT",
    if: "IF",
    else: "ELSE",
    while: "WHILE",
    and: "AND",
    or: "OR",
    not: "NOT",
    func: "FUNC",
};
