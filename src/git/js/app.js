/**
 * Git & GitHub マスター講座
 * Main Application
 * @version 2.0.0
 */

/**
 * Application Configuration
 */
const AppConfig = {
    headerOffset: 80,
    scrollThreshold: 500,
    animationDelay: 100
};

/**
 * Course Data
 */
const CourseData = {
    chapters: [
        {
            id: 1,
            title: 'Git基礎概念とバージョン管理の重要性',
            duration: '45分',
            lessons: 5,
            items: [
                { icon: '📌', title: 'バージョン管理システムとは', desc: 'ソースコードの変更履歴を追跡・管理する仕組みと、その必要性を理解します' },
                { icon: '🔄', title: 'Gitの歴史と特徴', desc: '分散型バージョン管理システムとしてのGitの優位性を学びます' },
                { icon: '🗂️', title: 'リポジトリ・コミット・ブランチの概念', desc: 'Gitの3つの核心概念を図解で分かりやすく解説します' },
                { icon: '☁️', title: 'GitHubとは', desc: 'GitHubの役割とローカルGitとの違いを理解します' },
                { icon: '💡', title: 'Git用語集', desc: 'push, pull, merge, rebaseなど重要な用語をマスターします' }
            ]
        },
        {
            id: 2,
            title: '開発環境のセットアップ',
            duration: '60分',
            lessons: 6,
            items: [
                { icon: '⬇️', title: 'Gitのインストール（Windows/Mac/Linux）', desc: '各OSに対応したGitのインストール手順を解説します' },
                { icon: '🌙', title: 'Eclipse IDE for Java Developersのインストール', desc: '最新版Eclipseのダウンロードとセットアップ方法' },
                { icon: '🔌', title: 'EGitプラグインの確認と設定', desc: 'Eclipse内蔵のGitクライアントEGitの設定方法' },
                { icon: '👤', title: 'GitHubアカウントの作成', desc: 'GitHubアカウントの登録とプロフィール設定' },
                { icon: '🔑', title: 'SSH鍵の生成と登録', desc: 'セキュアな接続のためのSSH鍵設定手順' },
                { icon: '⚙️', title: 'Git初期設定（ユーザー名・メール）', desc: 'git configコマンドによる基本設定' }
            ]
        },
        {
            id: 3,
            title: 'Eclipse×Git基本操作',
            duration: '90分',
            lessons: 8,
            items: [
                { icon: '📁', title: '新規Javaプロジェクトの作成', desc: 'Eclipseで練習用Javaプロジェクトを作成します' },
                { icon: '🎯', title: 'ローカルリポジトリの初期化', desc: 'Team → Share Projectでgit initを実行' },
                { icon: '📝', title: '.gitignoreファイルの設定', desc: 'Eclipse特有のファイルを除外する設定方法' },
                { icon: '➕', title: 'ステージングとコミット', desc: 'Git Staging Viewを使った変更の記録方法' },
                { icon: '📊', title: '履歴の確認（History View）', desc: 'コミット履歴の閲覧と変更内容の確認' },
                { icon: '🔍', title: '差分の確認（Compare With）', desc: 'ファイル間の差分を視覚的に比較する方法' },
                { icon: '⏪', title: '変更の取り消し（Revert）', desc: 'コミットをなかったことにする方法' },
                { icon: '🏷️', title: 'タグの作成', desc: 'リリースポイントにタグを付ける方法' }
            ]
        },
        {
            id: 4,
            title: 'ブランチ操作とマージ戦略',
            duration: '75分',
            lessons: 6,
            items: [
                { icon: '🌿', title: 'ブランチの作成と切り替え', desc: 'feature/bugfix/releaseブランチの作成方法' },
                { icon: '🔀', title: 'マージの基本', desc: 'ブランチを統合するmerge操作の実践' },
                { icon: '⚠️', title: 'コンフリクトの解決', desc: '競合が発生した場合の対処方法' },
                { icon: '📈', title: 'リベースの概念と使い方', desc: '履歴を整理するrebase操作' },
                { icon: '🗑️', title: 'ブランチの削除', desc: '不要になったブランチのクリーンアップ' },
                { icon: '📋', title: 'Git Flow / GitHub Flow', desc: 'チーム開発で使われるブランチ戦略' }
            ]
        },
        {
            id: 5,
            title: 'GitHubとの連携',
            duration: '60分',
            lessons: 5,
            items: [
                { icon: '🆕', title: 'GitHubリポジトリの作成', desc: '新規リモートリポジトリの作成手順' },
                { icon: '🔗', title: 'リモートリポジトリの登録', desc: 'EclipseからGitHubへの接続設定' },
                { icon: '⬆️', title: 'Push操作', desc: 'ローカルの変更をGitHubにアップロード' },
                { icon: '⬇️', title: 'Pull / Fetch操作', desc: 'GitHubの変更をローカルに取り込む' },
                { icon: '📥', title: 'Clone操作', desc: '既存リポジトリをEclipseに取り込む' }
            ]
        },
        {
            id: 6,
            title: 'チーム開発の実践',
            duration: '90分',
            lessons: 7,
            items: [
                { icon: '🔐', title: 'リポジトリの公開設定とコラボレーター', desc: 'チームメンバーへのアクセス権限設定' },
                { icon: '📨', title: 'プルリクエストの作成', desc: 'コードレビューを依頼するPRの作成方法' },
                { icon: '👀', title: 'コードレビューの実施', desc: 'PRをレビューしてフィードバックを送る' },
                { icon: '✅', title: 'PRのマージとクローズ', desc: 'レビュー完了後のマージ操作' },
                { icon: '🎯', title: 'Issueの活用', desc: 'タスク管理とバグトラッキング' },
                { icon: '📊', title: 'Projectsボードの使い方', desc: 'カンバン形式でのタスク管理' },
                { icon: '🍴', title: 'Fork & Pull Requestモデル', desc: 'オープンソース貢献の基本フロー' }
            ]
        },
        {
            id: 7,
            title: '応用テクニック',
            duration: '60分',
            lessons: 5,
            items: [
                { icon: '📦', title: 'Stashの活用', desc: '作業中の変更を一時退避する方法' },
                { icon: '🍒', title: 'Cherry-pick', desc: '特定のコミットだけを取り込む' },
                { icon: '🔍', title: 'Git Blame', desc: 'コードの変更履歴を行単位で追跡' },
                { icon: '🔧', title: 'Interactive Rebase', desc: 'コミット履歴を整理・編集する' },
                { icon: '🎣', title: 'Git Hooks', desc: 'コミット前後に自動処理を実行' }
            ]
        },
        {
            id: 8,
            title: 'トラブルシューティング',
            duration: '45分',
            lessons: 4,
            items: [
                { icon: '🚨', title: 'よくあるエラーと解決方法', desc: '認証エラー、push拒否などの対処法' },
                { icon: '🔄', title: 'detached HEAD状態からの復帰', desc: 'HEADが外れた状態の修復方法' },
                { icon: '🗑️', title: '誤ったコミットの修正', desc: 'amend、reset、revertの使い分け' },
                { icon: '🛡️', title: 'データの復旧（reflog）', desc: '消してしまったコミットを救出する' }
            ]
        }
    ],

    resources: [
        { icon: '📖', title: 'Pro Git Book（日本語）', desc: 'Gitの公式ドキュメント', url: 'https://git-scm.com/book/ja/v2' },
        { icon: '🐙', title: 'GitHub Docs', desc: 'GitHub公式ドキュメント', url: 'https://docs.github.com/ja' },
        { icon: '🌙', title: 'EGit Documentation', desc: 'EGit公式ガイド', url: 'https://www.eclipse.org/egit/documentation/' },
        { icon: '🎮', title: 'Learn Git Branching', desc: 'インタラクティブ学習', url: 'https://learngitbranching.js.org/?locale=ja' },
        { icon: '📋', title: 'Git Cheat Sheet', desc: 'コマンドチートシート', url: 'https://training.github.com/downloads/ja/github-git-cheat-sheet/' },
        { icon: '📚', title: 'Atlassian Git Tutorial', desc: '包括的なチュートリアル', url: 'https://www.atlassian.com/ja/git/tutorials' }
    ],

    faq: [
        {
            question: 'GitとGitHubの違いは何ですか？',
            answer: '<strong>Git</strong>はローカルで動作する分散型バージョン管理システムです。<strong>GitHub</strong>はGitリポジトリをホスティングするWebサービスです。Gitは「ツール」、GitHubは「サービス」という関係です。'
        },
        {
            question: 'コミットメッセージはどう書けばいいですか？',
            answer: '1行目に変更内容を50文字以内で要約します。例：「Add user authentication feature」「Fix null pointer exception in UserService」日本語の場合も簡潔に書きましょう。'
        },
        {
            question: 'push時に「rejected」エラーが出ます',
            answer: 'リモートリポジトリにローカルにない変更がある場合に発生します。まず<code>git pull</code>でリモートの変更を取り込み、コンフリクトがあれば解決して、再度<code>git push</code>を実行します。'
        },
        {
            question: 'コンフリクトが発生したらどうすればいいですか？',
            answer: 'Eclipseでは、競合ファイルを右クリック → Team → Merge Tool で3ペイン表示で比較・編集できます。必要な変更を反映してファイルを保存、コミットします。'
        },
        {
            question: '.gitignoreには何を書けばいいですか？',
            answer: 'Eclipse + Javaプロジェクトでは: <code>.project</code>, <code>.classpath</code>, <code>.settings/</code>, <code>bin/</code>, <code>*.class</code>, <code>target/</code> などを除外します。'
        }
    ],

    shortcuts: [
        { action: 'コミット', keys: ['Ctrl', 'Shift', '3'], desc: 'Git Staging View を開く' },
        { action: '履歴表示', keys: ['Alt', 'Shift', 'H'], desc: 'Show in History' },
        { action: 'プル', keys: ['Ctrl', 'Shift', 'P'], desc: 'Pull from upstream' },
        { action: '比較', keys: ['Ctrl', 'Shift', 'D'], desc: 'Compare With HEAD' },
        { action: 'ブランチ切替', keys: ['Ctrl', 'Alt', 'B'], desc: 'Switch Branch' }
    ]
};

/**
 * Application Class
 */
class App {
    constructor() {
        this.components = {};
    }

    init() {
        this.initComponents();
        this.bindGlobalEvents();
        console.log('🚀 Git & GitHub マスター講座 initialized');
    }

    initComponents() {
        // Initialize Progress Bar
        this.components.progressBar = new ProgressBar('.progress-bar');

        // Initialize Header
        this.components.header = new Header('.header');

        // Initialize Accordion (Curriculum)
        this.components.accordion = new Accordion('.accordion');

        // Initialize Tabs (Practice)
        this.components.tabs = new Tabs('.tabs');

        // Initialize Code Blocks
        this.components.codeBlocks = new CodeBlock(document);

        // Initialize FAQ
        this.components.faq = new FAQ('.faq');

        // Initialize Back to Top
        this.components.backToTop = new BackToTop('.back-to-top');

        // Initialize Smooth Scroll
        this.components.smoothScroll = new SmoothScroll({
            offset: AppConfig.headerOffset
        });

        // Initialize Scroll Reveal
        this.components.scrollReveal = new ScrollReveal();
    }

    bindGlobalEvents() {
        // Handle page load
        window.addEventListener('load', () => {
            document.body.classList.add('is-loaded');
        });

        // Handle keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close any open modals or dropdowns
            }
        });
    }
}

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
