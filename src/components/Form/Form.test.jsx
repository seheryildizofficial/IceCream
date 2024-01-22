import { render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("Koşulların onaylanmasına göre buton aktifliği", async () => {
  //user setup
  const user = userEvent.setup();
  // test edilecek bileşeni ekrana bas
  render(<Form />);
  // gerekli elemanları çağır
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  //1) checkbox tiksizdir
  expect(checkBox).not.toBeChecked();

  //2) buton inaktiftir
  expect(button).toBeDisabled();

  //3) checboxa tıkla
  await user.click(checkBox);

  //4) buton aktiftir
  expect(button).toBoEnabled();

  //5) checbox tan tiki kaldır
  await user.click(checkBox);

  //6) buton inaktiftir
  expect(button).toBeDisabled();
});

test("onay butonu hover durumuna göre bildirim görünür", () => {
  const user = userEvent.setup();

  render(<Form />);

  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const popup = screen.getByText("Size gerçekten", { exact: false });

  //1) checkbox tikle
  //2) bildirim gözükmüyor mu
  //3) mouse u butonun üzerine getir
  //4) bildirim gözüküyor mu
  //5) mouse u butonun üzerinden kaldır
  //6) bildirim gözükmüyor mu
});
