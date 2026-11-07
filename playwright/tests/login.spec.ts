import { test, expect } from '@playwright/test';

test.describe('Login Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <form>
        <label for="username">Username</label>
        <input id="username" />

        <label for="password">Password</label>
        <input id="password" type="password" />

        <button type="submit">Log in</button>
        <p id="message"></p>
      </form>

      <script>
        document.querySelector('form').addEventListener('submit', (event) => {
          event.preventDefault();

          const username = document.querySelector('#username').value;
          const password = document.querySelector('#password').value;
          const message = document.querySelector('#message');

          message.textContent =
            username === 'testuser' && password === 'Password123'
              ? 'Login successful'
              : 'Invalid username or password';
        });
      </script>
    `);
  });

  test('should log in with valid credentials', async ({ page }) => {
    await page.getByLabel('Username').fill('testuser');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#message')).toHaveText('Login successful');
  });

  test('should reject invalid credentials', async ({ page }) => {
    await page.getByLabel('Username').fill('wronguser');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#message')).toHaveText(
      'Invalid username or password'
    );
  });

  test('should reject empty credentials', async ({ page }) => {
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#message')).toHaveText(
      'Invalid username or password'
    );
  });
});
