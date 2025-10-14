export function setItem(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
}

export function getItem(key: string) {
  try {
    const data = window.localStorage.getItem(key);
    return data ? data : undefined;
  } catch (err) {
    console.error(err);
  }
}

export function removeItem(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
}
