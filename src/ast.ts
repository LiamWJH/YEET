export type AssignOp =
    | "ASSIGN"
    | "PLUS_ASSIGN"
    | "MINUS_ASSIGN"
    | "STAR_ASSIGN"
    | "SLASH_ASSIGN";

export type BinaryOp =
    | "OR"
    | "AND"
    | "EQUAL"
    | "NOTEQ"
    | "LT"
    | "LTE"
    | "GT"
    | "GTE"
    | "PLUS"
    | "MINUS"
    | "STAR"
    | "SLASH";

export type UnaryOp =
    | "NOT"
    | "MINUS";

export type Expr =
    | { kind: "Num"; value: number }
    | { kind: "Str"; value: string }
    | { kind: "Bool"; value: boolean }
    | { kind: "Nil" }
    | { kind: "Ident"; name: string }
    | { kind: "Unary"; op: UnaryOp; rhs: Expr }
    | { kind: "Binary"; op: BinaryOp; lhs: Expr; rhs: Expr }
    | { kind: "Group"; expr: Expr }
    | { kind: "Call"; callee: Expr; args: Expr[] }; 

export type Stmt =
    | { kind: "Let"; name: string; init: Expr | null }
    | { kind: "Assign"; name: string; op: AssignOp; value: Expr }
    | { kind: "Print"; expr: Expr }
    | { kind: "ExprStmt"; expr: Expr }
    | { kind: "Block"; stmts: Stmt[] }
    | { kind: "If"; cond: Expr; then: Stmt; otherwise?: Stmt }
    | { kind: "While"; cond: Expr; body: Stmt }
    | { kind: "Fn"; name: string; params: string[]; body: Stmt }
    | { kind: "Return"; value?: Expr };

export type RExpr =
    | { kind: "Num"; value: number }
    | { kind: "Str"; value: string }
    | { kind: "Bool"; value: boolean }
    | { kind: "Nil" }
    | { kind: "Local"; slot: number }
    | { kind: "Global"; name: string }
    | { kind: "Unary"; op: UnaryOp; rhs: RExpr }
    | { kind: "Binary"; op: BinaryOp; lhs: RExpr; rhs: RExpr }
    | { kind: "Group"; expr: RExpr }
    | { kind: "Call"; callee: RExpr; args: RExpr[] };
    
export type RStmt =
    | { kind: "Let"; slot: number; init: RExpr | null }
    | { kind: "AssignLocal"; slot: number; op: AssignOp; value: RExpr }
    | { kind: "AssignGlobal"; name: string; op: AssignOp; value: RExpr }
    | { kind: "Print"; expr: RExpr }
    | { kind: "ExprStmt"; expr: RExpr }
    | { kind: "Block"; stmts: RStmt[] }
    | { kind: "If"; cond: RExpr; then: RStmt; otherwise?: RStmt }
    | { kind: "While"; cond: RExpr; body: RStmt }
    | { kind: "Fn"; name: string; params: string[]; body: RStmt }
    | { kind: "Return"; value?: RExpr };

export type RProgram = {
    stmts: RStmt[];
    localCount: number;
};