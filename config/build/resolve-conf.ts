import webpack from "webpack";

export const resolveConf = ():webpack.ResolveOptions => {
  return {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }
}