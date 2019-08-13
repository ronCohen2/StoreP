export let loginValidation = async (data: any) => {
  const { id, password } = data;
  let errors: Object[] = [];
  if (!id) {
    errors.push({ type: "password", msg: "Password is required" });
  }
  if (!password) {
    errors.push({ type: "id", msg: "Id is required" });
  }
  return errors;
};
