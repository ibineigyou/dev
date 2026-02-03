/**
 * Git & GitHub マスター講座
 * Lesson Content Data
 * @version 2.0.0
 */

const LessonData = {
    chapters: {
        1: {
            title: 'Git基礎概念とバージョン管理の重要性',
            lessons: {
                1: {
                    id: '1-1',
                    icon: '📌',
                    title: 'バージョン管理システムとは',
                    duration: '10分',
                    content: `
                        <h2>バージョン管理システム（VCS）とは</h2>
                        <p>バージョン管理システム（Version Control System、VCS）は、ファイルの変更履歴を記録・管理するためのシステムです。ソフトウェア開発において、ソースコードの変更を追跡し、必要に応じて過去の状態に戻すことができます。</p>
                        
                        <div class="info-box info-box--info">
                            <span class="info-box__icon">💡</span>
                            <div class="info-box__content">
                                <p class="info-box__title">なぜバージョン管理が必要？</p>
                                <p class="info-box__text">「最終版.txt」「最終版_修正.txt」「最終版_本当に最終.txt」のようなファイル管理から解放されます！</p>
                            </div>
                        </div>

                        <h2>バージョン管理システムの種類</h2>
                        
                        <h3>1. ローカルバージョン管理</h3>
                        <p>単純なデータベースを使って、ファイルの変更を管理します。最も基本的な形態ですが、複数人での作業には向いていません。</p>
                        
                        <h3>2. 集中型バージョン管理（CVCS）</h3>
                        <p>CVS、Subversion（SVN）などが代表例です。中央サーバーにすべてのバージョン管理されたファイルが保存され、クライアントがそこからファイルをチェックアウトします。</p>
                        
                        <h3>3. 分散型バージョン管理（DVCS）</h3>
                        <p>Git、Mercurialなどが代表例です。クライアントは単にファイルの最新スナップショットをチェックアウトするのではなく、リポジトリ全体をミラーリングします。</p>

                        <div class="comparison">
                            <div class="comparison__header">
                                <div class="comparison__header-item">集中型（SVN等）</div>
                                <div class="comparison__header-item">分散型（Git等）</div>
                            </div>
                            <div class="comparison__body">
                                <div class="comparison__cell">中央サーバーに依存</div>
                                <div class="comparison__cell">各開発者が完全なリポジトリを持つ</div>
                                <div class="comparison__cell">オフラインでは作業不可</div>
                                <div class="comparison__cell">オフラインでも作業可能</div>
                                <div class="comparison__cell">サーバー障害時はデータ損失リスク</div>
                                <div class="comparison__cell">冗長性が高く安全</div>
                                <div class="comparison__cell">ブランチ操作が重い</div>
                                <div class="comparison__cell">ブランチ操作が軽量・高速</div>
                            </div>
                        </div>

                        <h2>バージョン管理の主なメリット</h2>
                        <ul>
                            <li><strong>変更履歴の追跡</strong>：いつ、誰が、何を変更したかを記録</li>
                            <li><strong>バックアップ</strong>：過去の状態にいつでも戻れる</li>
                            <li><strong>チーム協業</strong>：複数人が同時に作業可能</li>
                            <li><strong>ブランチング</strong>：機能開発を独立して進められる</li>
                            <li><strong>トレーサビリティ</strong>：バグの原因特定が容易</li>
                        </ul>

                        <div class="quiz">
                            <div class="quiz__header">
                                <span class="quiz__badge">確認クイズ</span>
                                <span class="quiz__title">理解度チェック</span>
                            </div>
                            <p class="quiz__question">Gitは次のうちどのタイプのバージョン管理システムですか？</p>
                            <div class="quiz__options">
                                <div class="quiz__option" data-correct="false">
                                    <span class="quiz__option-marker">A</span>
                                    <span class="quiz__option-text">ローカルバージョン管理</span>
                                </div>
                                <div class="quiz__option" data-correct="false">
                                    <span class="quiz__option-marker">B</span>
                                    <span class="quiz__option-text">集中型バージョン管理</span>
                                </div>
                                <div class="quiz__option" data-correct="true">
                                    <span class="quiz__option-marker">C</span>
                                    <span class="quiz__option-text">分散型バージョン管理</span>
                                </div>
                            </div>
                            <div class="quiz__result quiz__result--correct">
                                <p class="quiz__result-text">✅ 正解！Gitは分散型バージョン管理システム（DVCS）です。各開発者が完全なリポジトリのコピーを持ちます。</p>
                            </div>
                            <div class="quiz__result quiz__result--incorrect">
                                <p class="quiz__result-text">❌ 不正解。Gitは分散型バージョン管理システムです。もう一度内容を確認してみましょう。</p>
                            </div>
                        </div>
                    `
                },
                2: {
                    id: '1-2',
                    icon: '🔄',
                    title: 'Gitの歴史と特徴',
                    duration: '8分',
                    content: `
                        <h2>Gitの誕生</h2>
                        <p>Gitは2005年、Linuxカーネルの開発者であるリーナス・トーバルズ（Linus Torvalds）によって開発されました。</p>
                        
                        <div class="info-box info-box--info">
                            <span class="info-box__icon">📖</span>
                            <div class="info-box__content">
                                <p class="info-box__title">誕生のきっかけ</p>
                                <p class="info-box__text">Linuxカーネル開発で使用していたBitKeeperというツールのライセンス問題がきっかけで、リーナスが自ら新しいバージョン管理システムを開発しました。</p>
                            </div>
                        </div>

                        <h2>Gitの設計目標</h2>
                        <ul>
                            <li><strong>高速性</strong>：大規模プロジェクトでも高速に動作</li>
                            <li><strong>シンプルな設計</strong>：基本概念がシンプル</li>
                            <li><strong>非線形開発のサポート</strong>：数千の並行ブランチに対応</li>
                            <li><strong>完全分散型</strong>：中央サーバーに依存しない</li>
                            <li><strong>大規模プロジェクト対応</strong>：Linuxカーネルのような巨大プロジェクトを効率的に管理</li>
                        </ul>

                        <h2>Gitの主な特徴</h2>
                        
                        <h3>🚀 スナップショット方式</h3>
                        <p>他のVCSが差分を記録するのに対し、Gitはファイルシステム全体のスナップショットを記録します。変更がないファイルは以前のスナップショットへのリンクを保存するため、効率的です。</p>
                        
                        <div class="diagram">
                            <div class="diagram__title">スナップショット方式の概念図</div>
                            <div class="diagram__content">
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📸</span>
                                    <span class="diagram__item-label">Ver.1</span>
                                </div>
                                <span class="diagram__arrow">→</span>
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📸</span>
                                    <span class="diagram__item-label">Ver.2</span>
                                </div>
                                <span class="diagram__arrow">→</span>
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📸</span>
                                    <span class="diagram__item-label">Ver.3</span>
                                </div>
                            </div>
                        </div>

                        <h3>💻 ほぼすべての操作がローカル</h3>
                        <p>履歴の参照やコミットなど、ほとんどの操作がローカルで完結します。ネットワーク接続なしでも作業を続けられます。</p>

                        <h3>🔒 データの完全性</h3>
                        <p>GitはSHA-1ハッシュを使用してすべてのデータを管理します。これにより、データの改ざんを検出できます。</p>

                        <h3>🌿 軽量なブランチ</h3>
                        <p>ブランチの作成は非常に軽量で高速です。そのため、気軽にブランチを作成して機能開発を進められます。</p>

                        <div class="info-box info-box--tip">
                            <span class="info-box__icon">💡</span>
                            <div class="info-box__content">
                                <p class="info-box__title">豆知識</p>
                                <p class="info-box__text">「Git」という名前は、イギリスのスラングで「嫌な奴」という意味があります。リーナスはユーモアを込めてこの名前を付けたと言われています。</p>
                            </div>
                        </div>
                    `
                },
                3: {
                    id: '1-3',
                    icon: '🗂️',
                    title: 'リポジトリ・コミット・ブランチの概念',
                    duration: '12分',
                    content: `
                        <h2>リポジトリ（Repository）</h2>
                        <p>リポジトリは、プロジェクトのファイルとその変更履歴を保存する場所です。Gitではリポジトリ内に<code>.git</code>というディレクトリが作成され、すべての履歴情報がここに保存されます。</p>

                        <h3>リポジトリの種類</h3>
                        <div class="term-list">
                            <div class="term-item">
                                <span class="term-item__name">ローカル</span>
                                <span class="term-item__desc">自分のPC上にあるリポジトリ。直接編集や作業を行う場所。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">リモート</span>
                                <span class="term-item__desc">サーバー上（GitHubなど）にあるリポジトリ。チームで共有する場所。</span>
                            </div>
                        </div>

                        <h2>コミット（Commit）</h2>
                        <p>コミットは、ある時点のプロジェクトの状態を記録したスナップショットです。各コミットには以下の情報が含まれます：</p>
                        <ul>
                            <li>変更されたファイルの内容</li>
                            <li>作成者（Author）</li>
                            <li>作成日時</li>
                            <li>コミットメッセージ（変更の説明）</li>
                            <li>親コミットへの参照</li>
                            <li>一意のハッシュ値（SHA-1）</li>
                        </ul>

                        <div class="diagram">
                            <div class="diagram__title">コミットの連鎖</div>
                            <div class="diagram__content">
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📝</span>
                                    <span class="diagram__item-label">C1</span>
                                </div>
                                <span class="diagram__arrow">→</span>
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📝</span>
                                    <span class="diagram__item-label">C2</span>
                                </div>
                                <span class="diagram__arrow">→</span>
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📝</span>
                                    <span class="diagram__item-label">C3</span>
                                </div>
                                <span class="diagram__arrow">→</span>
                                <div class="diagram__item" style="background: rgba(255,107,53,0.2); border: 2px solid var(--color-brand-orange);">
                                    <span class="diagram__item-icon">📍</span>
                                    <span class="diagram__item-label">HEAD</span>
                                </div>
                            </div>
                        </div>

                        <h2>ブランチ（Branch）</h2>
                        <p>ブランチは、開発の流れを分岐させる機能です。メインの開発ラインに影響を与えずに、新機能の開発やバグ修正を行えます。</p>

                        <div class="code-block">
                            <div class="code-block__header">
                                <span class="code-block__lang">概念図</span>
                            </div>
                            <div class="code-block__content">
                                <code>        feature
           ↓
    C1 ← C2 ← C4
           ↖
            C3 ← C5 ← main (HEAD)
</code>
                            </div>
                        </div>

                        <h3>主要なブランチの役割</h3>
                        <div class="term-list">
                            <div class="term-item">
                                <span class="term-item__name">main/master</span>
                                <span class="term-item__desc">本番環境にデプロイされる安定したコード</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">develop</span>
                                <span class="term-item__desc">開発中の最新コード（Git Flowの場合）</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">feature/*</span>
                                <span class="term-item__desc">新機能の開発用</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">bugfix/*</span>
                                <span class="term-item__desc">バグ修正用</span>
                            </div>
                        </div>

                        <div class="exercise">
                            <div class="exercise__header">
                                <span class="exercise__icon">✏️</span>
                                <span class="exercise__title">理解度チェック</span>
                            </div>
                            <p class="exercise__desc">以下の質問に答えてみましょう：</p>
                            <div class="exercise__steps">
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">リポジトリとは？</h4>
                                        <p class="exercise__step-text">→ プロジェクトのファイルと変更履歴を保存する場所</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">コミットに含まれる情報は？</h4>
                                        <p class="exercise__step-text">→ 変更内容、作成者、日時、メッセージ、ハッシュ値</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">ブランチの目的は？</h4>
                                        <p class="exercise__step-text">→ メインラインに影響を与えずに独立した開発を行う</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                },
                4: {
                    id: '1-4',
                    icon: '☁️',
                    title: 'GitHubとは',
                    duration: '8分',
                    content: `
                        <h2>GitHubとは</h2>
                        <p>GitHubは、Gitリポジトリのホスティングサービスです。2008年に設立され、2018年にMicrosoftに買収されました。世界最大のソースコード共有プラットフォームとして、1億人以上の開発者が利用しています。</p>

                        <div class="info-box info-box--important">
                            <span class="info-box__icon">⚠️</span>
                            <div class="info-box__content">
                                <p class="info-box__title">GitとGitHubは別物！</p>
                                <p class="info-box__text">Git = バージョン管理ツール（ソフトウェア）<br>GitHub = Gitリポジトリのホスティングサービス（Webサービス）</p>
                            </div>
                        </div>

                        <h2>GitHubの主な機能</h2>

                        <h3>📁 リポジトリホスティング</h3>
                        <p>Gitリポジトリをクラウド上で管理。パブリック（公開）とプライベート（非公開）を選択可能。</p>

                        <h3>🔀 プルリクエスト（Pull Request）</h3>
                        <p>コードの変更を提案し、レビューを受けてマージする仕組み。チーム開発の核となる機能。</p>

                        <h3>🎫 Issues</h3>
                        <p>バグ報告、機能リクエスト、タスク管理などを行うチケットシステム。</p>

                        <h3>📋 Projects</h3>
                        <p>カンバンボード形式でタスクを管理。スプリント計画などに活用。</p>

                        <h3>🤖 Actions</h3>
                        <p>CI/CD（継続的インテグレーション/デプロイ）を実現する自動化機能。</p>

                        <h3>📖 Wiki</h3>
                        <p>プロジェクトのドキュメントを管理するWiki機能。</p>

                        <h2>GitHubの競合サービス</h2>
                        <div class="term-list">
                            <div class="term-item">
                                <span class="term-item__name">GitLab</span>
                                <span class="term-item__desc">オープンソース版あり。CI/CD機能が充実。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">Bitbucket</span>
                                <span class="term-item__desc">Atlassian製。Jiraとの連携が強み。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">Azure DevOps</span>
                                <span class="term-item__desc">Microsoft製。エンタープライズ向け機能が充実。</span>
                            </div>
                        </div>

                        <h2>GitHubを使うメリット</h2>
                        <ul>
                            <li><strong>コラボレーション</strong>：世界中の開発者と協力できる</li>
                            <li><strong>オープンソース</strong>：有名なOSSプロジェクトに参加できる</li>
                            <li><strong>ポートフォリオ</strong>：自分のスキルを公開してアピール</li>
                            <li><strong>信頼性</strong>：Microsoftの支援による安定したサービス</li>
                            <li><strong>エコシステム</strong>：豊富なサードパーティツールとの連携</li>
                        </ul>
                    `
                },
                5: {
                    id: '1-5',
                    icon: '💡',
                    title: 'Git用語集',
                    duration: '7分',
                    content: `
                        <h2>基本用語</h2>
                        <div class="term-list">
                            <div class="term-item">
                                <span class="term-item__name">repository</span>
                                <span class="term-item__desc">プロジェクトのファイルと履歴を保存する場所。リポジトリ。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">commit</span>
                                <span class="term-item__desc">変更を記録する操作。スナップショットを作成。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">branch</span>
                                <span class="term-item__desc">開発の流れを分岐させたもの。並行開発が可能。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">HEAD</span>
                                <span class="term-item__desc">現在作業中のブランチ/コミットを指すポインタ。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">working directory</span>
                                <span class="term-item__desc">実際にファイルを編集する作業ディレクトリ。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">staging area</span>
                                <span class="term-item__desc">コミット前の変更を一時的に保存する場所。インデックスとも呼ぶ。</span>
                            </div>
                        </div>

                        <h2>操作に関する用語</h2>
                        <div class="term-list">
                            <div class="term-item">
                                <span class="term-item__name">clone</span>
                                <span class="term-item__desc">リモートリポジトリをローカルにコピー。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">add</span>
                                <span class="term-item__desc">変更をステージングエリアに追加。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">push</span>
                                <span class="term-item__desc">ローカルの変更をリモートに送信。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">pull</span>
                                <span class="term-item__desc">リモートの変更をローカルに取り込み＆マージ。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">fetch</span>
                                <span class="term-item__desc">リモートの情報を取得（マージはしない）。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">merge</span>
                                <span class="term-item__desc">別のブランチの変更を現在のブランチに統合。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">rebase</span>
                                <span class="term-item__desc">コミット履歴を別のベースに移動。履歴をきれいに保つ。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">checkout</span>
                                <span class="term-item__desc">ブランチの切り替えやファイルの復元。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">stash</span>
                                <span class="term-item__desc">作業中の変更を一時退避。</span>
                            </div>
                        </div>

                        <h2>状態・状況に関する用語</h2>
                        <div class="term-list">
                            <div class="term-item">
                                <span class="term-item__name">conflict</span>
                                <span class="term-item__desc">マージ時に同じ箇所が異なる変更をされている状態。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">untracked</span>
                                <span class="term-item__desc">Gitで追跡されていないファイル。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">staged</span>
                                <span class="term-item__desc">コミット予定としてマークされた変更。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">modified</span>
                                <span class="term-item__desc">前回のコミットから変更されたファイル。</span>
                            </div>
                            <div class="term-item">
                                <span class="term-item__name">detached HEAD</span>
                                <span class="term-item__desc">HEADが特定のコミットを直接指している状態。</span>
                            </div>
                        </div>

                        <div class="diagram">
                            <div class="diagram__title">Gitの3つの状態</div>
                            <div class="diagram__content">
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📂</span>
                                    <span class="diagram__item-label">Working Dir</span>
                                </div>
                                <span class="diagram__arrow">add →</span>
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📋</span>
                                    <span class="diagram__item-label">Staging</span>
                                </div>
                                <span class="diagram__arrow">commit →</span>
                                <div class="diagram__item">
                                    <span class="diagram__item-icon">📦</span>
                                    <span class="diagram__item-label">Repository</span>
                                </div>
                            </div>
                        </div>

                        <div class="quiz">
                            <div class="quiz__header">
                                <span class="quiz__badge">確認クイズ</span>
                                <span class="quiz__title">用語の理解</span>
                            </div>
                            <p class="quiz__question">リモートリポジトリの変更をローカルに取り込み、自動的にマージする操作は？</p>
                            <div class="quiz__options">
                                <div class="quiz__option" data-correct="false">
                                    <span class="quiz__option-marker">A</span>
                                    <span class="quiz__option-text">fetch</span>
                                </div>
                                <div class="quiz__option" data-correct="true">
                                    <span class="quiz__option-marker">B</span>
                                    <span class="quiz__option-text">pull</span>
                                </div>
                                <div class="quiz__option" data-correct="false">
                                    <span class="quiz__option-marker">C</span>
                                    <span class="quiz__option-text">clone</span>
                                </div>
                            </div>
                            <div class="quiz__result quiz__result--correct">
                                <p class="quiz__result-text">✅ 正解！pullはfetch + mergeを行う操作です。</p>
                            </div>
                            <div class="quiz__result quiz__result--incorrect">
                                <p class="quiz__result-text">❌ 不正解。fetchは取得のみ、cloneは初回コピーです。pullが正解です。</p>
                            </div>
                        </div>
                    `
                }
            }
        },
        2: {
            title: '開発環境のセットアップ',
            lessons: {
                1: {
                    id: '2-1',
                    icon: '⬇️',
                    title: 'Gitのインストール',
                    duration: '15分',
                    content: `
                        <h2>Gitのインストール方法</h2>
                        <p>お使いのOSに応じたインストール方法を選択してください。</p>

                        <h2>Windows</h2>
                        <h3>Git for Windowsのインストール</h3>
                        <div class="exercise">
                            <div class="exercise__header">
                                <span class="exercise__icon">📥</span>
                                <span class="exercise__title">インストール手順</span>
                            </div>
                            <div class="exercise__steps">
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">ダウンロード</h4>
                                        <p class="exercise__step-text"><a href="https://git-scm.com/download/win" target="_blank">https://git-scm.com/download/win</a> にアクセスし、インストーラーをダウンロード</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">インストーラーを実行</h4>
                                        <p class="exercise__step-text">ダウンロードした.exeファイルを実行</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">設定の選択</h4>
                                        <p class="exercise__step-text">基本的にデフォルト設定でOK。エディタはお好みで選択。</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">インストール完了</h4>
                                        <p class="exercise__step-text">Git BashとGit GUIがインストールされます</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2>macOS</h2>
                        <h3>方法1: Homebrew（推奨）</h3>
                        <div class="code-block">
                            <div class="code-block__header">
                                <span class="code-block__lang">Terminal</span>
                                <button class="code-block__copy"><span>📋</span> コピー</button>
                            </div>
                            <div class="code-block__content">
                                <code><span class="comment"># Homebrewがない場合は先にインストール</span>
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

<span class="comment"># Gitをインストール</span>
<span class="command">brew install git</span></code>
                            </div>
                        </div>

                        <h3>方法2: Xcode Command Line Tools</h3>
                        <div class="code-block">
                            <div class="code-block__header">
                                <span class="code-block__lang">Terminal</span>
                                <button class="code-block__copy"><span>📋</span> コピー</button>
                            </div>
                            <div class="code-block__content">
                                <code><span class="command">xcode-select --install</span></code>
                            </div>
                        </div>

                        <h2>Linux (Ubuntu/Debian)</h2>
                        <div class="code-block">
                            <div class="code-block__header">
                                <span class="code-block__lang">Terminal</span>
                                <button class="code-block__copy"><span>📋</span> コピー</button>
                            </div>
                            <div class="code-block__content">
                                <code><span class="command">sudo apt update</span>
<span class="command">sudo apt install git</span></code>
                            </div>
                        </div>

                        <h2>インストールの確認</h2>
                        <div class="code-block">
                            <div class="code-block__header">
                                <span class="code-block__lang">Terminal</span>
                                <button class="code-block__copy"><span>📋</span> コピー</button>
                            </div>
                            <div class="code-block__content">
                                <code><span class="command">git --version</span>
<span class="comment"># 出力例: git version 2.43.0</span></code>
                            </div>
                        </div>

                        <div class="info-box info-box--tip">
                            <span class="info-box__icon">✅</span>
                            <div class="info-box__content">
                                <p class="info-box__title">成功の確認</p>
                                <p class="info-box__text">バージョン番号が表示されればインストール成功です。2.30以上を推奨します。</p>
                            </div>
                        </div>
                    `
                },
                2: {
                    id: '2-2',
                    icon: '🌙',
                    title: 'Eclipse IDE for Java Developersのインストール',
                    duration: '12分',
                    content: `
                        <h2>Eclipse IDEのダウンロード</h2>
                        <p>Eclipse IDE for Java Developersには、EGit（Git連携プラグイン）が標準で含まれています。</p>

                        <div class="exercise">
                            <div class="exercise__header">
                                <span class="exercise__icon">📥</span>
                                <span class="exercise__title">インストール手順</span>
                            </div>
                            <div class="exercise__steps">
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">ダウンロードページにアクセス</h4>
                                        <p class="exercise__step-text"><a href="https://www.eclipse.org/downloads/packages/" target="_blank">https://www.eclipse.org/downloads/packages/</a></p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">パッケージを選択</h4>
                                        <p class="exercise__step-text">「Eclipse IDE for Java Developers」を選択</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">OSを選択してダウンロード</h4>
                                        <p class="exercise__step-text">Windows / macOS / Linux から選択</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">インストール</h4>
                                        <p class="exercise__step-text">Windows: インストーラーを実行<br>macOS: .dmgを開いてApplicationsにドラッグ<br>Linux: 解凍して任意の場所に配置</p>
                                    </div>
                                </div>
                                <div class="exercise__step">
                                    <div class="exercise__step-number"></div>
                                    <div class="exercise__step-content">
                                        <h4 class="exercise__step-title">起動とワークスペース設定</h4>
                                        <p class="exercise__step-text">初回起動時にワークスペース（作業フォルダ）を指定</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="info-box info-box--warning">
                            <span class="info-box__icon">⚠️</span>
                            <div class="info-box__content">
                                <p class="info-box__title">JDKが必要です</p>
                                <p class="info-box__text">Eclipse実行にはJDK（Java Development Kit）が必要です。JDK 17以上を推奨。<br><a href="https://adoptium.net/" target="_blank">Adoptium</a>からダウンロード可能です。</p>
                            </div>
                        </div>

                        <h2>推奨設定</h2>
                        <h3>文字エンコーディングの設定</h3>
                        <div class="code-block">
                            <div class="code-block__header">
                                <span class="code-block__lang">Eclipse設定</span>
                            </div>
                            <div class="code-block__content">
                                <code>Window → Preferences → General → Workspace
Text file encoding: <span class="string">UTF-8</span>

Window → Preferences → General → Editors → Text Editors
<span class="keyword">☑</span> Show line numbers
<span class="keyword">☑</span> Show whitespace characters</code>
                            </div>
                        </div>

                        <h3>日本語化（任意）</h3>
                        <p>Pleiadesプラグインを使用すると日本語化できます：<a href="https://willbrains.jp/" target="_blank">https://willbrains.jp/</a></p>
                    `
                }
            }
        }
    },

    // Get lesson by chapter and lesson number
    getLesson(chapterId, lessonId) {
        const chapter = this.chapters[chapterId];
        if (!chapter) return null;
        return chapter.lessons[lessonId] || null;
    },

    // Get chapter info
    getChapter(chapterId) {
        return this.chapters[chapterId] || null;
    },

    // Get all lessons in a chapter
    getChapterLessons(chapterId) {
        const chapter = this.chapters[chapterId];
        if (!chapter) return [];
        return Object.values(chapter.lessons);
    },

    // Get total lessons count
    getTotalLessons() {
        let count = 0;
        Object.values(this.chapters).forEach(chapter => {
            count += Object.keys(chapter.lessons).length;
        });
        return count;
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LessonData;
}
