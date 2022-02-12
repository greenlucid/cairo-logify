export type Log = {
  kind: "plain" | "args"
  text?: string
  args?: string[]
}

export interface PlainLog extends Log {
  kind: "plain"
  text: string
}

export interface ArgsLog extends Log {
  kind: "args"
  args: string[]
}

export const isLogLine = () => {

}

export const parseLine = (line: string): Log => {
  return {kind: "plain"}
}