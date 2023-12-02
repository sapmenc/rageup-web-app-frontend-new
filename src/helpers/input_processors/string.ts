const stringInputProcessor = (value: string): string | null => {
    return value === "" ? null : value;
  }

  export default stringInputProcessor;