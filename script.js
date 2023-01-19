const form = document.querySelector("#formHabits")
const nlwSetup = new NLWSetup(form)

const data = {
  gym: ["01-01", "01-02", "01-06"],
  program: ["01-04", "01-06"],
  takePills: ["01-02", "01-05"],
}

nlwSetup.setData(data)
nlwSetup.load()
