export interface User {
    name: string,
    login: string
  }

export type Props = {
  admin: () => void,  
  view: () => void
}
