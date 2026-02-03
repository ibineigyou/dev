/**
 * Git & GitHub マスター講座
 * Additional Lesson Content Data (Chapter 4-5)
 * @version 2.0.0
 */

// Chapter 4: ブランチ操作とマージ戦略
LessonData.chapters[4] = {
    title: 'ブランチ操作とマージ戦略',
    lessons: {
        1: {
            id: '4-1',
            icon: '🌿',
            title: 'ブランチの作成と切り替え',
            duration: '12分',
            content: `
                <h2>ブランチとは</h2>
                <p>ブランチは開発の流れを分岐させる機能です。メインラインに影響を与えずに、新機能の開発やバグ修正を行えます。</p>

                <div class="diagram">
                    <div class="diagram__title">ブランチの概念</div>
                    <div class="diagram__content">
                        <div class="diagram__item" style="background: rgba(46,204,113,0.2);">
                            <span class="diagram__item-icon">🌿</span>
                            <span class="diagram__item-label">main</span>
                        </div>
                        <span class="diagram__arrow">↗</span>
                        <div class="diagram__item" style="background: rgba(155,89,182,0.2);">
                            <span class="diagram__item-icon">✨</span>
                            <span class="diagram__item-label">feature</span>
                        </div>
                    </div>
                </div>

                <h2>ブランチの作成</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🌿</span>
                        <span class="exercise__title">新規ブランチの作成</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Switch To メニューを開く</h4>
                                <p class="exercise__step-text">プロジェクト右クリック → Team → Switch To → New Branch...</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">ブランチ名を入力</h4>
                                <p class="exercise__step-text">Branch name: <code>feature/add-greeting</code></p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">作成して切り替え</h4>
                                <p class="exercise__step-text">「Checkout new branch」にチェック → Finish</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>ブランチの切り替え</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Team → Switch To → [ブランチ名]

<span class="comment"># または</span>
Team → Switch To → Other... → ブランチを選択</code>
                    </div>
                </div>

                <h2>ブランチ命名規則</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">feature/*</span>
                        <span class="term-item__desc">新機能の開発（例: feature/user-auth）</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">bugfix/*</span>
                        <span class="term-item__desc">バグ修正（例: bugfix/login-error）</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">hotfix/*</span>
                        <span class="term-item__desc">緊急修正（例: hotfix/security-patch）</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">release/*</span>
                        <span class="term-item__desc">リリース準備（例: release/v1.2.0）</span>
                    </div>
                </div>

                <div class="quiz">
                    <div class="quiz__header">
                        <span class="quiz__badge">確認クイズ</span>
                        <span class="quiz__title">理解度チェック</span>
                    </div>
                    <p class="quiz__question">新機能を開発する際のブランチ命名として適切なのはどれですか？</p>
                    <div class="quiz__options">
                        <div class="quiz__option" data-correct="true">
                            <span class="quiz__option-marker">A</span>
                            <span class="quiz__option-text">feature/user-login</span>
                        </div>
                        <div class="quiz__option" data-correct="false">
                            <span class="quiz__option-marker">B</span>
                            <span class="quiz__option-text">bugfix/user-login</span>
                        </div>
                        <div class="quiz__option" data-correct="false">
                            <span class="quiz__option-marker">C</span>
                            <span class="quiz__option-text">hotfix/user-login</span>
                        </div>
                    </div>
                    <div class="quiz__result quiz__result--correct">
                        <p class="quiz__result-text">✅ 正解！新機能開発にはfeature/プレフィックスを使います。</p>
                    </div>
                    <div class="quiz__result quiz__result--incorrect">
                        <p class="quiz__result-text">❌ 不正解。新機能開発にはfeature/プレフィックスが適切です。</p>
                    </div>
                </div>
            `
        },
        2: {
            id: '4-2',
            icon: '🔀',
            title: 'マージの基本',
            duration: '15分',
            content: `
                <h2>マージとは</h2>
                <p>別のブランチの変更を現在のブランチに統合する操作です。</p>

                <h2>マージの種類</h2>
                <div class="comparison">
                    <div class="comparison__header">
                        <div class="comparison__header-item">Fast-forward</div>
                        <div class="comparison__header-item">3-way merge</div>
                    </div>
                    <div class="comparison__body">
                        <div class="comparison__cell">ブランチ分岐後、元ブランチに変更がない場合</div>
                        <div class="comparison__cell">両方のブランチに変更がある場合</div>
                        <div class="comparison__cell">マージコミットなし</div>
                        <div class="comparison__cell">マージコミットあり</div>
                        <div class="comparison__cell">履歴が直線的</div>
                        <div class="comparison__cell">履歴が分岐・合流</div>
                    </div>
                </div>

                <h2>マージの実行手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🔀</span>
                        <span class="exercise__title">featureブランチをmainにマージ</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">mainブランチに切り替え</h4>
                                <p class="exercise__step-text">Team → Switch To → main</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">マージを実行</h4>
                                <p class="exercise__step-text">Team → Merge...</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">マージ元ブランチを選択</h4>
                                <p class="exercise__step-text">feature/add-greeting を選択 → Merge</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">ポイント</p>
                        <p class="info-box__text">マージは「取り込む側」のブランチにいる状態で実行します。mainにfeatureを取り込むなら、mainにいる状態でfeatureをマージします。</p>
                    </div>
                </div>
            `
        },
        3: {
            id: '4-3',
            icon: '⚠️',
            title: 'コンフリクトの解決',
            duration: '15分',
            content: `
                <h2>コンフリクトとは</h2>
                <p>複数のブランチで同じ箇所が異なる変更をされた場合に発生する競合状態です。Gitが自動でマージできないため、手動で解決する必要があります。</p>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">コンフリクトが発生しやすいケース</p>
                        <p class="info-box__text">• 同じファイルの同じ行を編集<br>• 一方でファイルを削除、他方で編集<br>• 長期間放置されたブランチのマージ</p>
                    </div>
                </div>

                <h2>コンフリクトの解決手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🔧</span>
                        <span class="exercise__title">Eclipse Merge Toolでの解決</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">コンフリクトファイルを確認</h4>
                                <p class="exercise__step-text">赤い「!」マークが付いたファイルがコンフリクト状態</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Merge Toolを開く</h4>
                                <p class="exercise__step-text">ファイル右クリック → Team → Merge Tool</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">3ペインで比較・編集</h4>
                                <p class="exercise__step-text">左: 自分の変更、中央: 結果、右: 相手の変更</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">解決してコミット</h4>
                                <p class="exercise__step-text">保存 → ファイル右クリック → Team → Add to Index → Commit</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>コンフリクトマーカー</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">コンフリクト状態のファイル</span>
                    </div>
                    <div class="code-block__content">
                        <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
<span class="comment">// 自分のブランチの変更</span>
System.out.println(<span class="string">"Hello"</span>);
=======
<span class="comment">// マージ元ブランチの変更</span>
System.out.println(<span class="string">"こんにちは"</span>);
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/greeting</code>
                    </div>
                </div>
            `
        },
        4: {
            id: '4-4',
            icon: '📈',
            title: 'リベースの概念',
            duration: '12分',
            content: `
                <h2>リベースとは</h2>
                <p>ブランチの分岐点を移動させ、履歴を一直線に整理する操作です。</p>

                <div class="comparison">
                    <div class="comparison__header">
                        <div class="comparison__header-item">Merge</div>
                        <div class="comparison__header-item">Rebase</div>
                    </div>
                    <div class="comparison__body">
                        <div class="comparison__cell">履歴が分岐・合流</div>
                        <div class="comparison__cell">履歴が一直線</div>
                        <div class="comparison__cell">マージコミットが残る</div>
                        <div class="comparison__cell">マージコミットなし</div>
                        <div class="comparison__cell">安全（履歴を変更しない）</div>
                        <div class="comparison__cell">履歴を書き換える</div>
                        <div class="comparison__cell">いつでも使える</div>
                        <div class="comparison__cell">ローカルのみ推奨</div>
                    </div>
                </div>

                <h2>リベースの実行</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># featureブランチで実行</span>
Team → Rebase...
→ mainを選択 → Rebase

<span class="comment"># featureのコミットがmainの先端に移動</span></code>
                    </div>
                </div>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">重要な注意</p>
                        <p class="info-box__text">push済みのコミットをリベースしないでください。他の開発者の履歴と矛盾が生じます。リベースはローカルのみのブランチに対して行いましょう。</p>
                    </div>
                </div>
            `
        },
        5: {
            id: '4-5',
            icon: '🗑️',
            title: 'ブランチの削除',
            duration: '6分',
            content: `
                <h2>不要ブランチの削除</h2>
                <p>マージが完了したブランチは削除してリポジトリを整理しましょう。</p>

                <h2>ローカルブランチの削除</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Git Repositories View
→ Branches → Local → 削除したいブランチを右クリック
→ Delete Branch</code>
                    </div>
                </div>

                <h2>リモートブランチの削除</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Git Repositories View
→ Branches → Remote Tracking → origin → ブランチ右クリック
→ Delete Branch

<span class="comment"># またはGitHubのWeb UIから削除</span></code>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">ベストプラクティス</p>
                        <p class="info-box__text">GitHubのPRをマージする際に「Delete branch」オプションを使うと、自動的にリモートブランチが削除されます。</p>
                    </div>
                </div>
            `
        },
        6: {
            id: '4-6',
            icon: '📋',
            title: 'Git Flow / GitHub Flow',
            duration: '15分',
            content: `
                <h2>ブランチ戦略とは</h2>
                <p>チーム開発でブランチをどのように運用するかのルールです。代表的な戦略を紹介します。</p>

                <h2>Git Flow</h2>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">main</span>
                        <span class="term-item__desc">本番リリース用。常に安定状態。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">develop</span>
                        <span class="term-item__desc">開発用。次期リリースの統合ブランチ。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">feature/*</span>
                        <span class="term-item__desc">機能開発。developから分岐してdevelopへマージ。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">release/*</span>
                        <span class="term-item__desc">リリース準備。developから分岐してmainとdevelopへマージ。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">hotfix/*</span>
                        <span class="term-item__desc">緊急修正。mainから分岐してmainとdevelopへマージ。</span>
                    </div>
                </div>

                <h2>GitHub Flow</h2>
                <p>Git Flowをシンプルにした戦略。Web開発など頻繁にデプロイするプロジェクト向け。</p>
                <div class="term-list">
                    <div class="term-item">
                        <span class="term-item__name">main</span>
                        <span class="term-item__desc">常にデプロイ可能な状態。</span>
                    </div>
                    <div class="term-item">
                        <span class="term-item__name">feature/*</span>
                        <span class="term-item__desc">全ての作業用。mainから分岐してPR経由でmainへマージ。</span>
                    </div>
                </div>

                <div class="comparison">
                    <div class="comparison__header">
                        <div class="comparison__header-item">Git Flow</div>
                        <div class="comparison__header-item">GitHub Flow</div>
                    </div>
                    <div class="comparison__body">
                        <div class="comparison__cell">複雑だが厳格</div>
                        <div class="comparison__cell">シンプル</div>
                        <div class="comparison__cell">リリースサイクルが長い</div>
                        <div class="comparison__cell">頻繁なデプロイ向け</div>
                        <div class="comparison__cell">パッケージソフト向け</div>
                        <div class="comparison__cell">Webサービス向け</div>
                    </div>
                </div>
            `
        }
    }
};

// Chapter 5: GitHubとの連携
LessonData.chapters[5] = {
    title: 'GitHubとの連携',
    lessons: {
        1: {
            id: '5-1',
            icon: '🆕',
            title: 'GitHubリポジトリの作成',
            duration: '10分',
            content: `
                <h2>リモートリポジトリの作成</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🆕</span>
                        <span class="exercise__title">GitHub上でリポジトリを作成</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">GitHubにログイン</h4>
                                <p class="exercise__step-text">github.com にアクセスしてログイン</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">New repositoryをクリック</h4>
                                <p class="exercise__step-text">右上の「+」→ New repository</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">リポジトリ情報を入力</h4>
                                <p class="exercise__step-text">
                                    Repository name: <code>GitPractice</code><br>
                                    Description: 任意の説明<br>
                                    Public / Private を選択
                                </p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">作成</h4>
                                <p class="exercise__step-text">Create repository をクリック</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box info-box--tip">
                    <span class="info-box__icon">💡</span>
                    <div class="info-box__content">
                        <p class="info-box__title">既存プロジェクトをpushする場合</p>
                        <p class="info-box__text">「Add a README file」などのチェックは外しておきましょう。空のリポジトリにすることで、ローカルの履歴をそのままpushできます。</p>
                    </div>
                </div>
            `
        },
        2: {
            id: '5-2',
            icon: '🔗',
            title: 'リモートリポジトリの登録',
            duration: '10分',
            content: `
                <h2>リモートリポジトリの登録</h2>
                <p>ローカルリポジトリとGitHubを接続します。</p>

                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">🔗</span>
                        <span class="exercise__title">Eclipseでリモートを登録</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Git Repositories Viewを開く</h4>
                                <p class="exercise__step-text">Window → Show View → Other → Git → Git Repositories</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Remotesを展開</h4>
                                <p class="exercise__step-text">リポジトリ → Remotes を右クリック → Create Remote...</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">リモート名を設定</h4>
                                <p class="exercise__step-text">Remote name: <code>origin</code>（デフォルト）</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">URIを設定</h4>
                                <p class="exercise__step-text">Change → URI: <code>git@github.com:USERNAME/GitPractice.git</code></p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>URIの形式</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">SSH形式（推奨）</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="command">git@github.com:</span><span class="string">USERNAME/REPOSITORY.git</span></code>
                    </div>
                </div>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">HTTPS形式</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="command">https://github.com/</span><span class="string">USERNAME/REPOSITORY.git</span></code>
                    </div>
                </div>
            `
        },
        3: {
            id: '5-3',
            icon: '⬆️',
            title: 'Push操作',
            duration: '10分',
            content: `
                <h2>Pushとは</h2>
                <p>ローカルリポジトリの変更をリモートリポジトリにアップロードする操作です。</p>

                <div class="diagram">
                    <div class="diagram__title">Push操作のイメージ</div>
                    <div class="diagram__content">
                        <div class="diagram__item">
                            <span class="diagram__item-icon">💻</span>
                            <span class="diagram__item-label">Local</span>
                        </div>
                        <span class="diagram__arrow">→ push</span>
                        <div class="diagram__item">
                            <span class="diagram__item-icon">☁️</span>
                            <span class="diagram__item-label">GitHub</span>
                        </div>
                    </div>
                </div>

                <h2>Push手順</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code><span class="comment"># 初回Push（upstreamを設定）</span>
Team → Push Branch 'main'...
→ Preview → Push

<span class="comment"># 2回目以降</span>
Team → Push to Upstream
<span class="keyword">または</span> Ctrl + Shift + U</code>
                    </div>
                </div>

                <div class="info-box info-box--warning">
                    <span class="info-box__icon">⚠️</span>
                    <div class="info-box__content">
                        <p class="info-box__title">Pushが拒否される場合</p>
                        <p class="info-box__text">リモートにローカルにない変更がある場合、pushは拒否されます。先にpullして変更を取り込んでから再度pushしてください。</p>
                    </div>
                </div>
            `
        },
        4: {
            id: '5-4',
            icon: '⬇️',
            title: 'Pull / Fetch操作',
            duration: '12分',
            content: `
                <h2>FetchとPullの違い</h2>
                <div class="comparison">
                    <div class="comparison__header">
                        <div class="comparison__header-item">Fetch</div>
                        <div class="comparison__header-item">Pull</div>
                    </div>
                    <div class="comparison__body">
                        <div class="comparison__cell">リモートの情報を取得</div>
                        <div class="comparison__cell">取得 + マージ</div>
                        <div class="comparison__cell">ローカルブランチは変更しない</div>
                        <div class="comparison__cell">ローカルブランチを更新</div>
                        <div class="comparison__cell">安全（確認してからマージできる）</div>
                        <div class="comparison__cell">手軽（1ステップ）</div>
                    </div>
                </div>

                <h2>Pull操作</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Team → Pull
<span class="keyword">または</span> Ctrl + Shift + P</code>
                    </div>
                </div>

                <h2>Fetch操作</h2>
                <div class="code-block">
                    <div class="code-block__header">
                        <span class="code-block__lang">操作</span>
                    </div>
                    <div class="code-block__content">
                        <code>Team → Fetch from Upstream

<span class="comment"># Fetch後、手動でマージ</span>
Team → Merge → origin/main</code>
                    </div>
                </div>
            `
        },
        5: {
            id: '5-5',
            icon: '📥',
            title: 'Clone操作',
            duration: '10分',
            content: `
                <h2>Cloneとは</h2>
                <p>リモートリポジトリをローカルに複製する操作です。既存のプロジェクトに参加する際に使用します。</p>

                <h2>Clone手順</h2>
                <div class="exercise">
                    <div class="exercise__header">
                        <span class="exercise__icon">📥</span>
                        <span class="exercise__title">GitHubからClone</span>
                    </div>
                    <div class="exercise__steps">
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">Import Projectsを開く</h4>
                                <p class="exercise__step-text">File → Import → Git → Projects from Git → Clone URI</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">URIを入力</h4>
                                <p class="exercise__step-text">GitHubの「Code」ボタンからURLをコピーして貼り付け</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">ブランチを選択</h4>
                                <p class="exercise__step-text">Cloneするブランチを選択（通常はmain）</p>
                            </div>
                        </div>
                        <div class="exercise__step">
                            <div class="exercise__step-number"></div>
                            <div class="exercise__step-content">
                                <h4 class="exercise__step-title">保存先を指定</h4>
                                <p class="exercise__step-text">ローカルの保存先ディレクトリを指定 → Finish</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
};
