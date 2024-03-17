export interface ServerActionParams<B extends Object> {
  url: string;
  tags?: string[];
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: B;
}
