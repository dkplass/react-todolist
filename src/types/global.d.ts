declare interface GenericObject<T> {
  [key: string]: T;
}

declare interface Props {
  children?: React.ReactNode;
}

// extends GenericObject<T>
