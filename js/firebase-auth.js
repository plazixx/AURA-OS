import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlV1BvWkEpPs_8VyVMdIW4NaCw6nG3Fkg",
  authDomain: "aura-os-b6859.firebaseapp.com",
  projectId: "aura-os-b6859",
  storageBucket: "aura-os-b6859.firebasestorage.app",
  messagingSenderId: "531896576031",
  appId: "1:531896576031:web:9062b70c3575c750a04d2a",
  measurementId: "G-SHTLRP7GC8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const form = document.querySelector('#auth-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const account = document.querySelector('#account-state');
const signOutButton = document.querySelector('#sign-out');
let mode = 'login';

function say(text, error=false) { message.textContent = text; message.dataset.error = error ? 'true' : 'false'; }
function friendlyError(error) {
  const map = {
    'auth/email-already-in-use':'Этот адрес уже зарегистрирован. Войди в аккаунт.',
    'auth/invalid-email':'Проверь адрес электронной почты.',
    'auth/weak-password':'Пароль слишком короткий: используй не менее 6 символов.',
    'auth/invalid-credential':'Не удалось войти. Проверь почту и пароль.',
    'auth/too-many-requests':'Слишком много попыток. Попробуй позже.',
    'auth/network-request-failed':'Нет соединения с интернетом.'
  };
  return map[error.code] || `Не получилось выполнить действие (${error.code || 'ошибка'}). Проверь настройки Firebase.`;
}
document.querySelector('#mode-toggle').addEventListener('click', () => {
  mode = mode === 'login' ? 'register' : 'login';
  document.querySelector('#submit').textContent = mode === 'login' ? 'Войти' : 'Создать аккаунт';
  document.querySelector('#mode-toggle').textContent = mode === 'login' ? 'Уже есть аккаунт? Войти' : 'Впервые здесь? Создать аккаунт';
  say(mode === 'login' ? 'Войди, чтобы продолжить.' : 'Для регистрации нужен действующий адрес электронной почты.');
});
form.addEventListener('submit', async e => {
  e.preventDefault();
  const button = document.querySelector('#submit'); button.disabled = true;
  say(mode === 'login' ? 'Выполняется вход…' : 'Создаём аккаунт…');
  try {
    if (mode === 'login') await signInWithEmailAndPassword(auth, email.value.trim(), password.value);
    else await createUserWithEmailAndPassword(auth, email.value.trim(), password.value);
    say(mode === 'login' ? 'Вход выполнен.' : 'Аккаунт создан! Теперь можно войти.');
  } catch (err) { say(friendlyError(err), true); }
  finally { button.disabled = false; }
});
signOutButton.addEventListener('click', async () => { try { await signOut(auth); say('Ты вышел из аккаунта.'); } catch(e) { say(friendlyError(e), true); } });
onAuthStateChanged(auth, user => {
  if (user) {
    account.textContent = `Вход выполнен: ${user.email}`;
    signOutButton.hidden = false;
  } else {
    account.textContent = 'Ты не вошёл в аккаунт.';
    signOutButton.hidden = true;
  }
});
