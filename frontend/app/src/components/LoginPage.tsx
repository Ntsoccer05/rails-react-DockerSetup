import { useState, useEffect } from "react";

function LoginForm() {
  // useStateを使ってメールアドレスとパスワードの状態を管理
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffectを使ってコンポーネントのマウント後に一度だけ実行する処理
  useEffect(() => {
    console.log("LoginFormがマウントされました。");
    // ここにAPIからのデータ取得などの初期化処理を書く。
  }, []); // 空の依存配列を渡すことで、コンポーネントのマウント時にのみ実行されるようにする。

  // ログイン処理のダミー関数
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // フォームのデフォルト送信動作を防止
    console.log("ログイン処理", { email, password });
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleLogin}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 me-4 text-lg">Sign in with</p>
                {/* ソーシャルログインボタン */}
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // メールアドレスの入力値を状態にセット
                  />
                </div>
              </div>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // パスワードの入力値を状態にセット
                  />
                </div>
              </div>
              <div className="mb-6 flex items-center justify-between">
                {/* チェックボックスとパスワード忘れリンク */}
              </div>
              <div className="text-center lg:text-left">
                <button type="submit">Login</button>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?{" "}
                  <a href="#!" className="register">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
