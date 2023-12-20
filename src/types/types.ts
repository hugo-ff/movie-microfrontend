type TConfig = {
  defaultValue?: string;
  count?: number;
  interpolation?: Record<string, unknown>;
  namespace?: string;
};

type FormatterFn = (text: string) => string;

interface ExtendedTConfig extends TConfig {
  formatter?: FormatterFn;
  formatters?: FormatterFn[];
}

export interface CustomTFunction<T extends string = string> {
  (key: T): string;
  (key: T, defaultValue: string): string;
  (key: T, config: TConfig): string;
  (key: T, defaultValue: string, config: TConfig): string;
  (key: T, formatterConfig: ExtendedTConfig): React.ReactNode;
}
