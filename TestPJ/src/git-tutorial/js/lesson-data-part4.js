/**
 * Git & GitHub マスター講座
 * Additional Lesson Content Data (Chapter 6-8)
 * @version 2.0.0
 */

// Chapter 6: チーム開発の実践
LessonData.chapters[6] = {
    title: 'チーム開発の実践',
    lessons: {
        1: {
            id: '6-1',
            icon: '🔐',
            title: 'コラボレーター設定',
            duration: '8分',
            content: `
                <h2>コラボレーターとは</h2>
                <p>プライベートリポジトリにアクセス権を持つチームメンバーです。リポジトリの所有者が招待します。</p>

                <h2>コラボレーターの招待</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🔐</span>
                        <span class="exercise__title">メンバーを招待する手順</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Settings を開く</h4>
                                <p class="exercise__step-text">リポジトリページ → Settings タブ</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Collaborators を選択</h4>
                                <p class="exercise__step-text">左メニュー → Collaborators（パスワード確認が必要な場合あり）</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">メンバーを追加</h4>
                                <p class="exercise__step-text">Add people → ユーザー名またはメールで検索 → Add</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>権限レベル</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">Read</span>
                        <span class="term-item__desc">閲覧・Clone・Fork が可能</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Triage</span>
                        <span class="term-item__desc">Read + Issue/PR管理</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Write</span>
                        <span class="term-item__desc">Triage + Push可能</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Maintain</span>
                        <span class="term-item__desc">Write + 一部設定変更</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Admin</span>
                        <span class="term-item__desc">全ての権限</span>
                    </div>
                </div>
            `
        },
        2: {
            id: '6-2',
            icon: '📨',
            title: 'プルリクエストの作成',
            duration: '15分',
            content: `
                <h2>プルリクエスト（PR）とは</h2>
                <p>自分のブランチの変更をメインブランチに取り込んでもらうためのリクエストです。コードレビューを経てマージします。</p>

                <h2>PR作成手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">📨</span>
                        <span class="exercise__title">Pull Requestを作成</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">featureブランチをPush</h4>
                                <p class="exercise__step-text">ローカルのfeatureブランチをGitHubにPush</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">GitHubでPRを開く</h4>
                                <p class="exercise__step-text">GitHub → Pull requests → New pull request</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">ブランチを選択</h4>
                                <p class="exercise__step-text">base: main ← compare: feature/xxx</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">PRの内容を記述</h4>
                                <p class="exercise__step-text">Title: 変更の概要<br>Description: 詳細説明、関連Issue</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">作成</h4>
                                <p class="exercise__step-text">Create pull request をクリック</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>良いPRの書き方</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">PRテンプレート例</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="keyword">## 概要</span>
ユーザー認証機能を追加

<span class="keyword">## 変更内容</span>
- ログイン/ログアウト機能
- セッション管理
- パスワードハッシュ化

<span class="keyword">## 関連Issue</span>
Closes #123

<span class="keyword">## テスト</span>
- [x] 単体テスト追加
- [x] 動作確認済み</code>
                    </div>
                </div>
            `
        },
        3: {
            id: '6-3',
            icon: '👀',
            title: 'コードレビューの実施',
            duration: '12分',
            content: `
                <h2>コードレビューとは</h2>
                <p>他の開発者が書いたコードをチェックし、フィードバックを提供するプロセスです。品質向上とナレッジ共有に役立ちます。</p>

                <h2>レビューの手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">👀</span>
                        <span class="exercise__title">PRをレビューする</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">PRを開く</h4>
                                <p class="exercise__step-text">Pull requests → 対象のPRを選択</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Files changedタブで確認</h4>
                                <p class="exercise__step-text">変更されたファイルと差分を確認</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">コメントを追加</h4>
                                <p class="exercise__step-text">行の「+」ボタンでコメント追加</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">レビューを送信</h4>
                                <p class="exercise__step-text">Review changes → Approve / Request changes / Comment</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>レビューの種類</h2>
                <div class="term-list">
                    <div class="term-item" style="background: rgba(46,204,113,0.1);">
                        <span class="term-item__name" style="color: #2ecc71;">Approve</span>
                        <span class="term-item__desc">変更を承認。マージ可能に。</span>
                    </div>
                    <div class="term-item" style="background: rgba(231,76,60,0.1);">
                        <span class="term-item__name" style="color: #e74c3c;">Request changes</span>
                        <span class="term-item__desc">修正を要求。対応後に再レビュー。</span>
                    </div>
                    <div class="term-item" style="background: rgba(243,156,18,0.1);">
                        <span class="term-item__name" style="color: #f39c12;">Comment</span>
                        <span class="term-item__desc">コメントのみ。承認/却下なし。</span>
                    </div>
                </div>
            `
        },
        4: {
            id: '6-4',
            icon: '✅',
            title: 'PRのマージ',
            duration: '8分',
            content: `
                <h2>マージ方法の種類</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">Create merge commit</span>
                        <span class="term-item__desc">マージコミットを作成。全履歴が保持される。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Squash and merge</span>
                        <span class="term-item__desc">全コミットを1つにまとめてマージ。履歴がきれい。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Rebase and merge</span>
                        <span class="term-item__desc">リベースしてマージ。直線的な履歴。</span>
                    </div>
                </div>

                <h2>マージ手順</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>1. レビュー承認を確認
2. 「Merge pull request」をクリック
3. マージ方法を選択
4. 「Confirm merge」をクリック
5. 「Delete branch」でブランチを削除（推奨）</code>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">Branch protection rules</p>
                        <p class="info-box__text">Settings → Branches で、レビュー必須やCIパス必須などのルールを設定できます。</p>
                    </div>
                </div>
            `
        },
        5: {
            id: '6-5',
            icon: '🎯',
            title: 'Issueの活用',
            duration: '10分',
            content: `
                <h2>Issueとは</h2>
                <p>バグ報告、機能リクエスト、タスク管理などに使用するチケットシステムです。</p>

                <h2>Issueの作成</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Issues タブ → New issue

<span class="keyword">Title:</span> 簡潔な概要
<span class="keyword">Description:</span> 詳細説明
<span class="keyword">Assignees:</span> 担当者
<span class="keyword">Labels:</span> 分類ラベル（bug, enhancement等）
<span class="keyword">Milestone:</span> マイルストーン</code>
                    </div>
                </div>

                <h2>IssueとPRの連携</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">自動クローズキーワード</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># PRの説明やコミットメッセージに記載</span>
Closes #123
Fixes #123
Resolves #123

<span class="comment"># マージ時にIssue #123が自動的にクローズされる</span></code>
                    </div>
                </div>

                <h2>便利なラベル</h2>
                <div class="term-list">
                    <div class="term-item" style="background: rgba(231,76,60,0.1);">
                        <span class="term-item__name" style="color: #e74c3c;">bug</span>
                        <span class="term-item__desc">バグ報告</span>
                    </div>
                    <div class="term-item" style="background: rgba(52,152,219,0.1);">
                        <span class="term-item__name" style="color: #3498db;">enhancement</span>
                        <span class="term-item__desc">機能改善</span>
                    </div>
                    <div class="term-item" style="background: rgba(46,204,113,0.1);">
                        <span class="term-item__name" style="color: #2ecc71;">good first issue</span>
                        <span class="term-item__desc">初心者向けタスク</span>
                    </div>
                    <div class="term-item" style="background: rgba(155,89,182,0.1);">
                        <span class="term-item__name" style="color: #9b59b6;">help wanted</span>
                        <span class="term-item__desc">協力者募集</span>
                    </div>
                </div>
            `
        },
        6: {
            id: '6-6',
            icon: '📊',
            title: 'Projectsボード',
            duration: '10分',
            content: `
                <h2>GitHub Projectsとは</h2>
                <p>カンバン形式でタスクを管理できる機能です。IssueやPRと連携できます。</p>

                <h2>プロジェクトの作成</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Projects タブ → New project
→ テンプレートを選択（Board推奨）
→ Project name を入力
→ Create</code>
                    </div>
                </div>

                <h2>カンバンボードの列</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">To Do</span>
                        <span class="term-item__desc">未着手のタスク</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">In Progress</span>
                        <span class="term-item__desc">作業中</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">In Review</span>
                        <span class="term-item__desc">レビュー待ち</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Done</span>
                        <span class="term-item__desc">完了</span>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">自動化</p>
                        <p class="info-box__text">IssueやPRのステータス変更で自動的にカードを移動させる設定が可能です。</p>
                    </div>
                </div>
            `
        },
        7: {
            id: '6-7',
            icon: '🍴',
            title: 'Fork & PRモデル',
            duration: '12分',
            content: `
                <h2>Forkとは</h2>
                <p>他人のリポジトリを自分のアカウントにコピーすることです。オープンソースへの貢献で使用します。</p>

                <div class="diagram">
                    <div class="diagram__title">Fork & PRの流れ</div>
                    <div class="diagram__content">
                        <div class="diagram__item">
                            <span class="diagram__item-icon">📦</span>
                            <span class="diagram__item-label">Original</span>
                        </div>
                        <span class="diagram__arrow">→ fork</span>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">🍴</span>
                            <span class="diagram__item-label">Your Fork</span>
                        </div>
                        <span class="diagram__arrow">→ PR</span>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">📦</span>
                            <span class="diagram__item-label">Original</span>
                        </div>
                    </div>
                </div>

                <h2>オープンソース貢献の手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🍴</span>
                        <span class="exercise__title">Fork & PR の流れ</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">リポジトリをFork</h4>
                                <p class="exercise__step-text">貢献したいリポジトリの「Fork」ボタンをクリック</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">ローカルにClone</h4>
                                <p class="exercise__step-text">自分のForkをClone</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">featureブランチで作業</h4>
                                <p class="exercise__step-text">ブランチを作成して変更をコミット</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">自分のForkにPush</h4>
                                <p class="exercise__step-text">変更をGitHubにPush</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">PRを作成</h4>
                                <p class="exercise__step-text">オリジナルリポジトリに対してPRを送信</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
};

// Chapter 7: 応用テクニック
LessonData.chapters[7] = {
    title: '応用テクニック',
    lessons: {
        1: {
            id: '7-1',
            icon: '📦',
            title: 'Stashの活用',
            duration: '10分',
            content: `
                <h2>Stashとは</h2>
                <p>作業中の変更を一時的に退避する機能です。ブランチ切り替え時などに便利です。</p>

                <h2>Stashの使い方</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 変更を退避</span>
Team → Stashes → Stash Changes...
→ メッセージを入力 → OK

<span class="comment"># 退避した変更を復元</span>
Team → Stashes → [stash名] → Apply Stashed Changes

<span class="comment"># 復元して削除</span>
Team → Stashes → [stash名] → Pop Stashed Changes</code>
                    </div>
                </div>

                <h2>使用例</h2>
                <div class="info-box info-box--info">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">こんな時に便利</p>
                        <p class="info-box__text">• 作業中に緊急のバグ修正が必要になった<br>• 別ブランチの確認が必要になった<br>• 変更を一時的に無かったことにしたい</p>
                    </div>
                </div>
            `
        },
        2: {
            id: '7-2',
            icon: '🍒',
            title: 'Cherry-pick',
            duration: '10分',
            content: `
                <h2>Cherry-pickとは</h2>
                <p>特定のコミットだけを別のブランチに取り込む操作です。</p>

                <h2>Cherry-pickの手順</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 取り込み先ブランチに切り替え</span>
Team → Switch To → main

<span class="comment"># History Viewで対象コミットを選択</span>
コミットを右クリック → Cherry-Pick</code>
                    </div>
                </div>

                <h2>使用例</h2>
                <ul>
                    <li>hotfixのコミットをdevelopブランチにも適用</li>
                    <li>特定の機能だけを先にリリース</li>
                    <li>間違ったブランチにコミットした変更を正しいブランチに移動</li>
                </ul>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">注意</p>
                        <p class="info-box__text">Cherry-pickは新しいコミットを作成します。同じ変更が複数のコミットとして存在することになるため、後でマージ時に注意が必要です。</p>
                    </div>
                </div>
            `
        },
        3: {
            id: '7-3',
            icon: '🔍',
            title: 'Git Blame',
            duration: '8分',
            content: `
                <h2>Blameとは</h2>
                <p>ファイルの各行が、いつ、誰によって、どのコミットで変更されたかを表示する機能です。</p>

                <h2>Blameの使い方</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>ファイルを右クリック → Team → Show Annotations

<span class="comment"># または</span>
エディタの左マージンを右クリック → Show Annotations</code>
                    </div>
                </div>

                <h2>表示される情報</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">コミットID</span>
                        <span class="term-item__desc">その行を変更したコミットのハッシュ</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Author</span>
                        <span class="term-item__desc">変更した人</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">Date</span>
                        <span class="term-item__desc">変更日時</span>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">使用例</p>
                        <p class="info-box__text">• バグの原因となったコミットを特定<br>• コードの意図を理解するために変更者に確認<br>• リファクタリングの影響範囲を把握</p>
                    </div>
                </div>
            `
        },
        4: {
            id: '7-4',
            icon: '🔧',
            title: 'Interactive Rebase',
            duration: '12分',
            content: `
                <h2>Interactive Rebaseとは</h2>
                <p>複数のコミットを編集、統合、並べ替え、削除できる機能です。Push前の履歴整理に使用します。</p>

                <h2>操作の種類</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">pick</span>
                        <span class="term-item__desc">そのまま使用</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">reword</span>
                        <span class="term-item__desc">メッセージを編集</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">edit</span>
                        <span class="term-item__desc">コミット内容を編集</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">squash</span>
                        <span class="term-item__desc">前のコミットと統合（メッセージも統合）</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">fixup</span>
                        <span class="term-item__desc">前のコミットと統合（メッセージは破棄）</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">drop</span>
                        <span class="term-item__desc">コミットを削除</span>
                    </div>
                </div>

                <h2>Eclipseでの操作</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>History View → 編集開始地点のコミットを右クリック
→ Rebase Interactive</code>
                    </div>
                </div>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">重要</p>
                        <p class="info-box__text">Push済みのコミットをrebaseしないでください。他の開発者の履歴と矛盾が生じます。</p>
                    </div>
                </div>
            `
        },
        5: {
            id: '7-5',
            icon: '🎣',
            title: 'Git Hooks',
            duration: '10分',
            content: `
                <h2>Git Hooksとは</h2>
                <p>Gitの特定の操作の前後に自動的にスクリプトを実行する仕組みです。</p>

                <h2>主なフック</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">pre-commit</span>
                        <span class="term-item__desc">コミット前に実行。コード検証など。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">commit-msg</span>
                        <span class="term-item__desc">コミットメッセージ検証。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">pre-push</span>
                        <span class="term-item__desc">Push前に実行。テスト実行など。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">post-merge</span>
                        <span class="term-item__desc">マージ後に実行。依存関係更新など。</span>
                    </div>
                </div>

                <h2>Hooksの場所</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">パス</span>
                    </div>
                    <div class="code-block__content">
                        <code>.git/hooks/
├── pre-commit.sample
├── commit-msg.sample
├── pre-push.sample
└── ...

<span class="comment"># .sampleを削除して有効化</span></code>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">便利なツール</p>
                        <p class="info-box__text">Husky（JavaScript）やpre-commit（Python）などのツールを使うと、フックの管理が簡単になります。</p>
                    </div>
                </div>
            `
        }
    }
};

// Chapter 8: トラブルシューティング
LessonData.chapters[8] = {
    title: 'トラブルシューティング',
    lessons: {
        1: {
            id: '8-1',
            icon: '🚨',
            title: 'よくあるエラーと解決方法',
            duration: '15分',
            content: `
                <h2>認証エラー</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">エラー</span>
                    </div>
                    <div class="code-block__content">
                        <code>Permission denied (publickey)</code>
                    </div>
                </div>
                <p><strong>解決策:</strong> SSH鍵が正しく設定されているか確認。<code>ssh -T git@github.com</code> でテスト。</p>

                <h2>Push拒否</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">エラー</span>
                    </div>
                    <div class="code-block__content">
                        <code>! [rejected] main -> main (non-fast-forward)</code>
                    </div>
                </div>
                <p><strong>解決策:</strong> <code>git pull</code> で最新を取得してからPush。</p>

                <h2>マージコンフリクト</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">エラー</span>
                    </div>
                    <div class="code-block__content">
                        <code>CONFLICT (content): Merge conflict in file.txt</code>
                    </div>
                </div>
                <p><strong>解決策:</strong> コンフリクトマーカーを手動で解決し、addしてcommit。</p>

                <h2>ブランチ削除エラー</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">エラー</span>
                    </div>
                    <div class="code-block__content">
                        <code>error: Cannot delete branch 'xxx' checked out</code>
                    </div>
                </div>
                <p><strong>解決策:</strong> 削除したいブランチから別のブランチに切り替えてから削除。</p>

                <h2>Large File エラー</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">エラー</span>
                    </div>
                    <div class="code-block__content">
                        <code>remote: error: File xxx is 123.45 MB; this exceeds GitHub's file size limit</code>
                    </div>
                </div>
                <p><strong>解決策:</strong> Git LFSを使用するか、.gitignoreに追加して履歴から削除。</p>
            `
        },
        2: {
            id: '8-2',
            icon: '🔄',
            title: 'detached HEAD状態からの復帰',
            duration: '10分',
            content: `
                <h2>detached HEADとは</h2>
                <p>HEADがブランチではなく特定のコミットを直接指している状態です。この状態でコミットしても、ブランチに属さない「浮いた」コミットになります。</p>

                <h2>発生する状況</h2>
                <ul>
                    <li>特定のコミットをcheckoutした</li>
                    <li>タグをcheckoutした</li>
                    <li>リモートブランチを直接checkoutした</li>
                </ul>

                <h2>復帰方法</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 変更を保存せずに復帰</span>
Team → Switch To → main

<span class="comment"># 変更を新しいブランチとして保存</span>
Team → Switch To → New Branch...
→ ブランチ名を入力 → Finish</code>
                    </div>
                </div>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">注意</p>
                        <p class="info-box__text">detached HEAD状態でコミットした後、ブランチに切り替えると、そのコミットは失われる可能性があります。必ずブランチを作成して保存してください。</p>
                    </div>
                </div>
            `
        },
        3: {
            id: '8-3',
            icon: '🗑️',
            title: '誤ったコミットの修正',
            duration: '12分',
            content: `
                <h2>修正方法の選択</h2>

                <h3>1. 直前のコミットを修正（Amend）</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Git Staging View
→ 修正したいファイルをstage
→ 「Amend」にチェック
→ Commit</code>
                    </div>
                </div>

                <h3>2. コミットを取り消す（Revert）</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>History View → 取り消すコミットを右クリック
→ Revert Commit

<span class="comment"># 打ち消しコミットが作成される（履歴は残る）</span></code>
                    </div>
                </div>

                <h3>3. コミットを削除（Reset）</h3>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>History View → 戻りたいコミットを右クリック
→ Reset → Hard

<span class="comment"># コミット自体が削除される（危険！）</span></code>
                    </div>
                </div>

                <div class="comparison">
                    <div class="comparison__header">
                        <div class="comparison__header-item">Revert</div>
                        <div class="comparison__header-item">Reset</div>
                    </div>
                    <div class="comparison__body">
                        <div class="comparison__cell">履歴が残る（安全）</div>
                        <div class="comparison__cell">履歴が消える（危険）</div>
                        <div class="comparison__cell">Push済みでもOK</div>
                        <div class="comparison__cell">ローカルのみ</div>
                        <div class="comparison__cell">取り消しコミットが増える</div>
                        <div class="comparison__cell">履歴がきれい</div>
                    </div>
                </div>
            `
        },
        4: {
            id: '8-4',
            icon: '🛡️',
            title: 'データの復旧',
            duration: '10分',
            content: `
                <h2>reflogとは</h2>
                <p>HEADの移動履歴を記録したログです。誤って削除したコミットやブランチを復旧できます。</p>

                <h2>reflogの確認</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">Terminal</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="command">git reflog</span>

<span class="comment"># 出力例:</span>
abc1234 HEAD@{0}: reset: moving to HEAD~1
def5678 HEAD@{1}: commit: Add feature
ghi9012 HEAD@{2}: checkout: moving from main to feature</code>
                    </div>
                </div>

                <h2>コミットの復旧</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">Terminal</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 失われたコミットを復旧</span>
<span class="command">git checkout</span> def5678

<span class="comment"># ブランチとして保存</span>
<span class="command">git checkout -b</span> recovered-branch</code>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">安心ポイント</p>
                        <p class="info-box__text">Gitでコミットされたデータは、reflogに残っている限り（デフォルト90日間）復旧可能です。慌てずに対処しましょう。</p>
                    </div>
                </div>

                <h2>ブランチの復旧</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">Terminal</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 削除したブランチを復旧</span>
<span class="command">git reflog</span>
<span class="comment"># ブランチの最後のコミットを探す</span>

<span class="command">git checkout -b</span> branch-name <span class="string">コミットID</span></code>
                    </div>
                </div>
            `
        }
    }
};
