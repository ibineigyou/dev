/**
 * Git & GitHub マスター講座
 * Additional Lesson Content Data (Chapter 2-3 ~ Chapter 8)
 * @version 2.0.0
 */

// Extend LessonData with additional chapters
Object.assign(LessonData.chapters[2].lessons, {
    3: {
        id: '2-3',
        icon: '🔌',
        title: 'EGitプラグインの設定',
        duration: '10分',
        content: `
            <h2>EGitとは</h2>
            <p>EGitは、Eclipse IDE用のGitプラグインです。Eclipse IDE for Java Developersには標準で搭載されています。</p>

            <div class="info-box info-box--info">
                <span class="info-box__icon">💡</span>
                <div class="info-box__content">
                    <p class="info-box__title">確認方法</p>
                    <p class="info-box__text">Help → About Eclipse IDE → Installation Details → Installed Software でEGitが表示されていれば、既にインストールされています。</p>
                </div>
            </div>

            <h2>EGitの初期設定</h2>

            <h3>1. Git設定の確認</h3>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Eclipse設定</span>
                </div>
                <div class="code-block__content">
                    <code>Window → Preferences → Team → Git → Configuration

<span class="keyword">user.name</span> = あなたの名前
<span class="keyword">user.email</span> = あなたのメールアドレス</code>
                </div>
            </div>

            <h3>2. デフォルトリポジトリフォルダの設定</h3>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Eclipse設定</span>
                </div>
                <div class="code-block__content">
                    <code>Window → Preferences → Team → Git

Default repository folder:
<span class="string">C:\\Users\\YourName\\git</span> (Windows)
<span class="string">/Users/YourName/git</span> (macOS)
<span class="string">/home/YourName/git</span> (Linux)</code>
                </div>
            </div>

            <h3>3. Git Staging Viewの表示</h3>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">操作手順</span>
                </div>
                <div class="code-block__content">
                    <code>Window → Show View → Other → Git → Git Staging
→ Open</code>
                </div>
            </div>

            <h2>推奨設定</h2>
            <div class="term-list">
                <div class="term-item">
                    <span class="term-item__name">History View</span>
                    <span class="term-item__desc">Window → Show View → Other → Git → History</span>
                </div>
                <div class="term-item">
                    <span class="term-item__name">Git Repositories</span>
                    <span class="term-item__desc">Window → Show View → Other → Git → Git Repositories</span>
                </div>
            </div>

            <div class="info-box info-box--tip">
                <span class="info-box__icon">✅</span>
                <div class="info-box__content">
                    <p class="info-box__title">パースペクティブの保存</p>
                    <p class="info-box__text">設定したViewのレイアウトは Window → Perspective → Save Perspective As で保存できます。</p>
                </div>
            </div>
        `
    },
    4: {
        id: '2-4',
        icon: '👤',
        title: 'GitHubアカウントの作成',
        duration: '8分',
        content: `
            <h2>GitHubアカウントの作成手順</h2>

            <div class="exercise">
                <div class="exercise__header">
                    <span class="exercise__icon">📝</span>
                    <span class="exercise__title">アカウント作成ステップ</span>
                </div>
                <div class="exercise__steps">
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">GitHubにアクセス</h4>
                            <p class="exercise__step-text"><a href="https://github.com" target="_blank">https://github.com</a> にアクセスし、「Sign up」をクリック</p>
                        </div>
                    </div>
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">メールアドレスを入力</h4>
                            <p class="exercise__step-text">有効なメールアドレスを入力（後で確認メールが届きます）</p>
                        </div>
                    </div>
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">パスワードを設定</h4>
                            <p class="exercise__step-text">15文字以上、または8文字以上で数字と小文字を含む</p>
                        </div>
                    </div>
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">ユーザー名を設定</h4>
                            <p class="exercise__step-text">英数字とハイフンのみ。公開されるので慎重に選びましょう</p>
                        </div>
                    </div>
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">メール確認</h4>
                            <p class="exercise__step-text">届いた確認メールのリンクをクリックして認証完了</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>プロフィール設定</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">推奨設定</span>
                </div>
                <div class="code-block__content">
                    <code>Settings → Profile
├── Name: フルネーム
├── Bio: 簡単な自己紹介
├── Company: 会社名（任意）
├── Location: 所在地（任意）
└── Social accounts: SNSリンク（任意）</code>
                </div>
            </div>

            <div class="info-box info-box--warning">
                <span class="info-box__icon">⚠️</span>
                <div class="info-box__content">
                    <p class="info-box__title">注意</p>
                    <p class="info-box__text">ユーザー名は後から変更可能ですが、既存のリポジトリURLが変わるため、変更には注意が必要です。</p>
                </div>
            </div>

            <h2>二要素認証の設定（推奨）</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">設定手順</span>
                </div>
                <div class="code-block__content">
                    <code>Settings → Password and authentication
→ Two-factor authentication → Enable

認証アプリ（Google Authenticator等）を使用推奨</code>
                </div>
            </div>
        `
    },
    5: {
        id: '2-5',
        icon: '🔑',
        title: 'SSH鍵の生成と登録',
        duration: '12分',
        content: `
            <h2>SSH鍵とは</h2>
            <p>SSH鍵は、パスワードなしでGitHubに安全に接続するための認証方式です。公開鍵と秘密鍵のペアで構成されます。</p>

            <div class="comparison">
                <div class="comparison__header">
                    <div class="comparison__header-item">HTTPS</div>
                    <div class="comparison__header-item">SSH</div>
                </div>
                <div class="comparison__body">
                    <div class="comparison__cell">毎回パスワード入力（またはトークン）</div>
                    <div class="comparison__cell">鍵があれば認証不要</div>
                    <div class="comparison__cell">設定が簡単</div>
                    <div class="comparison__cell">初期設定が必要</div>
                    <div class="comparison__cell">ファイアウォールで通りやすい</div>
                    <div class="comparison__cell">より安全</div>
                </div>
            </div>

            <h2>SSH鍵の生成</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Terminal</span>
                    <button class="code-block__copy"><span>📋</span> コピー</button>
                </div>
                <div class="code-block__content">
                    <code><span class="comment"># ED25519形式で生成（推奨）</span>
<span class="command">ssh-keygen -t ed25519 -C</span> <span class="string">"your_email@example.com"</span>

<span class="comment"># 保存場所を聞かれたらEnter（デフォルトでOK）</span>
Enter file in which to save the key: <span class="keyword">[Enter]</span>

<span class="comment"># パスフレーズを設定（任意、空でもOK）</span>
Enter passphrase: <span class="keyword">[パスフレーズまたはEnter]</span></code>
                </div>
            </div>

            <h2>SSH鍵の確認</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Terminal</span>
                    <button class="code-block__copy"><span>📋</span> コピー</button>
                </div>
                <div class="code-block__content">
                    <code><span class="comment"># 公開鍵の表示（これをGitHubに登録）</span>
<span class="command">cat ~/.ssh/id_ed25519.pub</span>

<span class="comment"># 出力例:</span>
ssh-ed25519 AAAAC3NzaC1lZDI1... your_email@example.com</code>
                </div>
            </div>

            <h2>GitHubに公開鍵を登録</h2>
            <div class="exercise">
                <div class="exercise__header">
                    <span class="exercise__icon">🔐</span>
                    <span class="exercise__title">登録手順</span>
                </div>
                <div class="exercise__steps">
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">GitHub Settings を開く</h4>
                            <p class="exercise__step-text">Settings → SSH and GPG keys → New SSH key</p>
                        </div>
                    </div>
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">公開鍵を貼り付け</h4>
                            <p class="exercise__step-text">Title: 識別用の名前（例: "MacBook Pro"）<br>Key: 先ほどコピーした公開鍵</p>
                        </div>
                    </div>
                    <div class="exercise__step">
                        <div class="exercise__step-number"></div>
                        <div class="exercise__step-content">
                            <h4 class="exercise__step-title">Add SSH key をクリック</h4>
                            <p class="exercise__step-text">パスワード確認後、登録完了</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2>接続テスト</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Terminal</span>
                    <button class="code-block__copy"><span>📋</span> コピー</button>
                </div>
                <div class="code-block__content">
                    <code><span class="command">ssh -T git@github.com</span>

<span class="comment"># 初回は確認メッセージが出るので "yes" と入力</span>
<span class="comment"># 成功すると以下のメッセージ:</span>
Hi <span class="string">username</span>! You've successfully authenticated...</code>
                </div>
            </div>

            <div class="alert alert--success">
                <span class="alert__icon">✅</span>
                <div class="alert__content">
                    <p class="alert__text">「Hi username!」が表示されればSSH接続の設定完了です！</p>
                </div>
            </div>
        `
    },
    6: {
        id: '2-6',
        icon: '⚙️',
        title: 'Git初期設定',
        duration: '8分',
        content: `
            <h2>必須設定</h2>
            <p>Gitを使い始める前に、最低限以下の設定が必要です。</p>

            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Terminal</span>
                    <button class="code-block__copy"><span>📋</span> コピー</button>
                </div>
                <div class="code-block__content">
                    <code><span class="comment"># ユーザー名の設定</span>
<span class="command">git config --global user.name</span> <span class="string">"Your Name"</span>

<span class="comment"># メールアドレスの設定（GitHubと同じものを推奨）</span>
<span class="command">git config --global user.email</span> <span class="string">"your@email.com"</span></code>
                </div>
            </div>

            <h2>推奨設定</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Terminal</span>
                    <button class="code-block__copy"><span>📋</span> コピー</button>
                </div>
                <div class="code-block__content">
                    <code><span class="comment"># デフォルトブランチ名をmainに</span>
<span class="command">git config --global init.defaultBranch main</span>

<span class="comment"># 日本語ファイル名の文字化け防止</span>
<span class="command">git config --global core.quotepath false</span>

<span class="comment"># 改行コードの自動変換（Windows）</span>
<span class="command">git config --global core.autocrlf true</span>

<span class="comment"># 改行コードの自動変換（macOS/Linux）</span>
<span class="command">git config --global core.autocrlf input</span>

<span class="comment"># デフォルトエディタの設定（VSCode）</span>
<span class="command">git config --global core.editor</span> <span class="string">"code --wait"</span></code>
                </div>
            </div>

            <h2>設定の確認</h2>
            <div class="code-block">
                <div class="code-block__header">
                    <span class="code-block__lang">Terminal</span>
                    <button class="code-block__copy"><span>📋</span> コピー</button>
                </div>
                <div class="code-block__content">
                    <code><span class="comment"># 全設定の表示</span>
<span class="command">git config --global --list</span>

<span class="comment"># 特定の設定値の確認</span>
<span class="command">git config --global user.name</span>
<span class="command">git config --global user.email</span></code>
                </div>
            </div>

            <h2>設定ファイルの場所</h2>
            <div class="term-list">
                <div class="term-item">
                    <span class="term-item__name">--global</span>
                    <span class="term-item__desc">~/.gitconfig（ユーザー全体）</span>
                </div>
                <div class="term-item">
                    <span class="term-item__name">--local</span>
                    <span class="term-item__desc">.git/config（リポジトリごと）</span>
                </div>
                <div class="term-item">
                    <span class="term-item__name">--system</span>
                    <span class="term-item__desc">/etc/gitconfig（システム全体）</span>
                </div>
            </div>

            <div class="info-box info-box--info">
                <span class="info-box__icon">📌</span>
                <div class="info-box__content">
                    <p class="info-box__title">優先順位</p>
                    <p class="info-box__text">local > global > system の順で優先されます。プロジェクトごとに異なる設定を使いたい場合は --local を使用します。</p>
                </div>
            </div>
        `
    }
});

// Chapter 3: Eclipse×Git基本操作
LessonData.chapters[3] = {
    title: 'Eclipse×Git基本操作',
    lessons: {
        1: {
            id: '3-1',
            icon: '📁',
            title: '新規Javaプロジェクトの作成',
            duration: '8分',
            content: `
                <h2>練習用プロジェクトの作成</h2>
                <p>Gitの操作を練習するためのJavaプロジェクトを作成しましょう。</p>

                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">📁</span>
                        <span class="exercise__title">プロジェクト作成手順</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">新規プロジェクトウィザードを開く</h4>
                                <p class="exercise__step-text">File → New → Java Project</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">プロジェクト名を入力</h4>
                                <p class="exercise__step-text">Project name: <code>GitPractice</code></p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">JREを確認</h4>
                                <p class="exercise__step-text">Use an execution environment JRE: JavaSE-17（または利用可能なバージョン）</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">完了</h4>
                                <p class="exercise__step-text">Finish をクリック</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>サンプルクラスの作成</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">Java</span>
                        <button class="code-block__copy"><span>📋</span> コピー</button>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment">// src → 右クリック → New → Class</span>
<span class="comment">// Package: com.example</span>
<span class="comment">// Name: HelloGit</span>

<span class="keyword">package</span> com.example;

<span class="keyword">public class</span> <span class="function">HelloGit</span> {
    <span class="keyword">public static void</span> main(String[] args) {
        System.out.println(<span class="string">"Hello, Git!"</span>);
    }
}</code>
                    </div>
                </div>

                <div class="alert alert--success">
                    <span class="alert__icon">✅</span>
                    <div class="alert__content">
                        <p class="alert__text">Package Explorer に GitPractice プロジェクトと HelloGit.java が表示されていれば成功です！</p>
                    </div>
                </div>
            `
        },
        2: {
            id: '3-2',
            icon: '🎯',
            title: 'ローカルリポジトリの初期化',
            duration: '10分',
            content: `
                <h2>リポジトリの初期化とは</h2>
                <p>プロジェクトをGitで管理するには、まずリポジトリを初期化（git init）する必要があります。Eclipseでは「Share Project」機能でこれを行います。</p>

                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🎯</span>
                        <span class="exercise__title">リポジトリ初期化手順</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Share Projectを開く</h4>
                                <p class="exercise__step-text">プロジェクトを右クリック → Team → Share Project...</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Gitを選択</h4>
                                <p class="exercise__step-text">リポジトリタイプで「Git」を選択 → Next</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">リポジトリを作成</h4>
                                <p class="exercise__step-text">「Create Repository」ボタンをクリック</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">完了</h4>
                                <p class="exercise__step-text">Finish をクリック</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>初期化後の確認</h2>
                <p>リポジトリが初期化されると、以下の変化があります：</p>
                <ul>
                    <li>プロジェクト名の後に <code>[GitPractice NO-HEAD]</code> と表示される</li>
                    <li>ファイルアイコンに「?」マークが付く（未追跡状態）</li>
                    <li>プロジェクトフォルダに <code>.git</code> ディレクトリが作成される</li>
                </ul>

                <div class="diagram">
                    <div class="diagram__title">ファイルステータスアイコン</div>
                    <div class="diagram__content">
                        <div class="diagram__item">
                            <span class="diagram__item-icon">❓</span>
                            <span class="diagram__item-label">Untracked</span>
                        </div>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">➕</span>
                            <span class="diagram__item-label">Staged</span>
                        </div>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">✔️</span>
                            <span class="diagram__item-label">Committed</span>
                        </div>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">📝</span>
                            <span class="diagram__item-label">Modified</span>
                        </div>
                    </div>
                </div>
            `
        },
        3: {
            id: '3-3',
            icon: '📝',
            title: '.gitignoreファイルの設定',
            duration: '10分',
            content: `
                <h2>.gitignoreとは</h2>
                <p>Gitで追跡しないファイルやディレクトリを指定するための設定ファイルです。コンパイル結果やIDE設定ファイルなど、共有不要なファイルを除外します。</p>

                <h2>Eclipse + Java用の.gitignore</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">.gitignore</span>
                        <button class="code-block__copy"><span>📋</span> コピー</button>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># Eclipse</span>
.project
.classpath
.settings/
bin/
.metadata/

<span class="comment"># Java</span>
*.class
*.jar
*.war
*.ear
target/

<span class="comment"># OS</span>
.DS_Store
Thumbs.db

<span class="comment"># IDE</span>
*.iml
.idea/</code>
                    </div>
                </div>

                <h2>.gitignoreファイルの作成</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">📝</span>
                        <span class="exercise__title">作成手順</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">新規ファイルを作成</h4>
                                <p class="exercise__step-text">プロジェクトを右クリック → New → File</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">ファイル名を入力</h4>
                                <p class="exercise__step-text">File name: <code>.gitignore</code>（先頭のドットを忘れずに）</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">内容を記述</h4>
                                <p class="exercise__step-text">上記の内容をコピー＆ペースト</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">テンプレート</p>
                        <p class="info-box__text"><a href="https://github.com/github/gitignore" target="_blank">github/gitignore</a> リポジトリに様々な言語・フレームワーク用のテンプレートが公開されています。</p>
                    </div>
                </div>
            `
        },
        4: {
            id: '3-4',
            icon: '➕',
            title: 'ステージングとコミット',
            duration: '15分',
            content: `
                <h2>Gitの3つの状態</h2>
                <div class="diagram">
                    <div class="diagram__title">ワークフロー</div>
                    <div class="diagram__content">
                        <div class="diagram__item">
                            <span class="diagram__item-icon">📂</span>
                            <span class="diagram__item-label">Working Dir</span>
                        </div>
                        <span class="diagram__arrow">→ add</span>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">📋</span>
                            <span class="diagram__item-label">Staging</span>
                        </div>
                        <span class="diagram__arrow">→ commit</span>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">📦</span>
                            <span class="diagram__item-label">Repository</span>
                        </div>
                    </div>
                </div>

                <h2>Git Staging Viewを使ったコミット</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">➕</span>
                        <span class="exercise__title">コミット手順</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Git Staging Viewを開く</h4>
                                <p class="exercise__step-text">Window → Show View → Other → Git → Git Staging</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">ファイルをステージング</h4>
                                <p class="exercise__step-text">Unstaged Changes のファイルを選択 → 「+」ボタン（または「++」で全て）</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">コミットメッセージを入力</h4>
                                <p class="exercise__step-text">Commit Message 欄に <code>Initial commit</code> と入力</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">コミット実行</h4>
                                <p class="exercise__step-text">「Commit」ボタンをクリック</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>コミットメッセージの書き方</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">推奨フォーマット</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="keyword">1行目:</span> 変更内容の要約（50文字以内）
<span class="keyword">2行目:</span> 空行
<span class="keyword">3行目以降:</span> 詳細な説明（任意）

<span class="comment"># 例:</span>
Add user authentication feature

- Implement login/logout functionality
- Add password encryption
- Create user session management</code>
                    </div>
                </div>

                <div class="alert alert--success">
                    <span class="alert__icon">✅</span>
                    <div class="alert__content">
                        <p class="alert__text">プロジェクト名が [GitPractice main] に変わればコミット成功です！</p>
                    </div>
                </div>
            `
        },
        5: {
            id: '3-5',
            icon: '📊',
            title: '履歴の確認',
            duration: '8分',
            content: `
                <h2>History Viewの使い方</h2>
                <p>コミット履歴を確認し、過去の変更内容を参照できます。</p>

                <h3>History Viewを開く</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 方法1: メニューから</span>
プロジェクトを右クリック → Team → Show in History

<span class="comment"># 方法2: ショートカット</span>
ファイルを選択 → Alt + Shift + H

<span class="comment"># 方法3: Viewを直接開く</span>
Window → Show View → Other → Git → History</code>
                    </div>
                </div>

                <h2>History Viewの見方</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">コミットID</span>
                        <span class="term-item__desc">各コミットを一意に識別するSHA-1ハッシュ値</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Author</span>
                        <span class="term-item__desc">コミットを作成した人</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Date</span>
                        <span class="term-item__desc">コミット日時</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Message</span>
                        <span class="term-item__desc">コミットメッセージ</span>
                    </div>
                </div>

                <h2>便利な機能</h2>
                <ul>
                    <li><strong>コミットの詳細表示</strong>: コミットをダブルクリックで変更内容を確認</li>
                    <li><strong>ファイルの変更履歴</strong>: 特定ファイルの履歴だけを表示</li>
                    <li><strong>ブランチフィルター</strong>: 特定ブランチの履歴のみ表示</li>
                    <li><strong>検索</strong>: コミットメッセージや作成者で検索</li>
                </ul>
            `
        },
        6: {
            id: '3-6',
            icon: '🔍',
            title: '差分の確認',
            duration: '10分',
            content: `
                <h2>Compare With機能</h2>
                <p>ファイルの変更内容を視覚的に比較できます。</p>

                <h3>比較方法</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>ファイルを右クリック → Compare With → ...

<span class="keyword">HEAD Revision</span>  : 最新コミットと比較
<span class="keyword">Previous Revision</span>: 1つ前のコミットと比較
<span class="keyword">Branch, Tag...</span>  : 別ブランチやタグと比較
<span class="keyword">Commit...</span>       : 特定のコミットと比較</code>
                    </div>
                </div>

                <h2>差分ビューの見方</h2>
                <div class="term-list">
                    <div class="term-item" style="background: rgba(46,204,113,0.1);">
                        <span class="term-item__name" style="color: #2ecc71;">緑色の行</span>
                        <span class="term-item__desc">追加された行</span>
                    </div>
                    <div class="term-item" style="background: rgba(231,76,60,0.1);">
                        <span class="term-item__name" style="color: #e74c3c;">赤色の行</span>
                        <span class="term-item__desc">削除された行</span>
                    </div>
                    <div class="term-item" style="background: rgba(243,156,18,0.1);">
                        <span class="term-item__name" style="color: #f39c12;">黄色の行</span>
                        <span class="term-item__desc">変更された行</span>
                    </div>
                </div>

                <h2>ショートカット</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">キーボード操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="keyword">Ctrl + Shift + D</span>: HEADと比較
<span class="keyword">Ctrl + .</span>       : 次の差分へ移動
<span class="keyword">Ctrl + ,</span>       : 前の差分へ移動</code>
                    </div>
                </div>
            `
        },
        7: {
            id: '3-7',
            icon: '⏪',
            title: '変更の取り消し',
            duration: '12分',
            content: `
                <h2>取り消し操作の種類</h2>

                <h3>1. ワーキングディレクトリの変更を取り消す</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>ファイルを右クリック → Replace With → HEAD Revision

<span class="comment"># まだコミットしていない変更を破棄</span></code>
                    </div>
                </div>

                <h3>2. ステージングを取り消す</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Git Staging View → Staged Changes
→ ファイルを選択 → 「-」ボタン

<span class="comment"># addしたものをunstageに戻す</span></code>
                    </div>
                </div>

                <h3>3. コミットを取り消す（Revert）</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>History View → 取り消したいコミットを右クリック
→ Revert Commit

<span class="comment"># 指定コミットの変更を打ち消す新しいコミットを作成</span></code>
                    </div>
                </div>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">Revertとresetの違い</p>
                        <p class="info-box__text"><strong>Revert</strong>: 取り消しコミットを新規作成（履歴が残る・安全）<br><strong>Reset</strong>: コミット自体を削除（履歴が消える・危険）</p>
                    </div>
                </div>

                <h3>4. Reset（上級者向け）</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>History View → 戻りたいコミットを右クリック → Reset

<span class="keyword">Soft</span> : HEADのみ移動（変更はstaged状態で保持）
<span class="keyword">Mixed</span>: HEADとindex移動（変更はunstaged状態で保持）
<span class="keyword">Hard</span> : 全て移動（変更を完全に破棄）</code>
                    </div>
                </div>
            `
        },
        8: {
            id: '3-8',
            icon: '🏷️',
            title: 'タグの作成',
            duration: '8分',
            content: `
                <h2>タグとは</h2>
                <p>特定のコミットに名前を付ける機能です。リリースバージョンの記録などに使用します。</p>

                <h2>タグの種類</h2>
                <div class="comparison">
                    <div class="comparison__header">
                        <div class="comparison__header-item">軽量タグ</div>
                        <div class="comparison__header-item">注釈付きタグ</div>
                    </div>
                    <div class="comparison__body">
                        <div class="comparison__cell">単なるポインタ</div>
                        <div class="comparison__cell">メタデータ付き</div>
                        <div class="comparison__cell">メッセージなし</div>
                        <div class="comparison__cell">メッセージあり</div>
                        <div class="comparison__cell">一時的な目印に</div>
                        <div class="comparison__cell">リリース用に推奨</div>
                    </div>
                </div>

                <h2>タグの作成手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🏷️</span>
                        <span class="exercise__title">Eclipseでのタグ作成</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">History Viewを開く</h4>
                                <p class="exercise__step-text">プロジェクト右クリック → Team → Show in History</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">タグを付けたいコミットを選択</h4>
                                <p class="exercise__step-text">コミットを右クリック → Create Tag...</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">タグ情報を入力</h4>
                                <p class="exercise__step-text">Tag name: <code>v1.0.0</code><br>Tag message: <code>First release</code></p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">作成</h4>
                                <p class="exercise__step-text">Create Tag をクリック</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>バージョニング規則（セマンティックバージョニング）</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">形式: MAJOR.MINOR.PATCH</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="keyword">v1.0.0</span> → <span class="keyword">v1.0.1</span>  バグ修正（PATCH）
<span class="keyword">v1.0.0</span> → <span class="keyword">v1.1.0</span>  機能追加（MINOR）
<span class="keyword">v1.0.0</span> → <span class="keyword">v2.0.0</span>  破壊的変更（MAJOR）</code>
                    </div>
                </div>
            `
        }
    }
};
