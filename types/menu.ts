interface Menu {
  title?: string
  icon?: string
  isActive?: boolean
  route?: string
}

export interface IMenu extends Menu {
  children?: Menu[]
}
