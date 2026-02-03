/**
 * Git & GitHub マスター講座
 * Modal & Lesson Components
 * @version 2.0.0
 */

/**
 * Modal Component
 */
class Modal {
    constructor(options = {}) {
        this.options = {
            overlayClass: 'modal-overlay',
            modalClass: 'modal',
            activeClass: 'is-active',
            closeOnOverlay: true,
            closeOnEscape: true,
            ...options
        };

        this.overlay = null;
        this.modal = null;
        this.isOpen = false;
        this.onCloseCallback = null;

        this.init();
    }

    init() {
        this.createOverlay();
        this.bindEvents();
    }

    createOverlay() {
        // Check if overlay already exists
        this.overlay = document.querySelector(`.${this.options.overlayClass}`);
        
        if (!this.overlay) {
            this.overlay = document.createElement('div');
            this.overlay.className = this.options.overlayClass;
            document.body.appendChild(this.overlay);
        }
    }

    bindEvents() {
        // Close on overlay click
        if (this.options.closeOnOverlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }

        // Close on escape key
        if (this.options.closeOnEscape) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });
        }
    }

    open(content, options = {}) {
        // Remove existing modal if any
        if (this.modal) {
            this.modal.remove();
        }

        // Create modal element
        this.modal = document.createElement('div');
        this.modal.className = `${this.options.modalClass} ${options.size ? `${this.options.modalClass}--${options.size}` : ''}`;
        this.modal.innerHTML = content;

        document.body.appendChild(this.modal);

        // Bind close button
        const closeBtn = this.modal.querySelector('.modal__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // Show modal with animation
        requestAnimationFrame(() => {
            this.overlay.classList.add(this.options.activeClass);
            this.modal.classList.add(this.options.activeClass);
        });

        this.isOpen = true;
        document.body.style.overflow = 'hidden';

        // Initialize components inside modal
        this.initModalComponents();

        return this;
    }

    close() {
        if (!this.isOpen) return;

        this.overlay.classList.remove(this.options.activeClass);
        if (this.modal) {
            this.modal.classList.remove(this.options.activeClass);
        }

        setTimeout(() => {
            if (this.modal) {
                this.modal.remove();
                this.modal = null;
            }
            document.body.style.overflow = '';
        }, 300);

        this.isOpen = false;

        if (this.onCloseCallback) {
            this.onCloseCallback();
        }
    }

    onClose(callback) {
        this.onCloseCallback = callback;
        return this;
    }

    initModalComponents() {
        // Initialize code blocks
        new CodeBlock(this.modal);

        // Initialize quizzes
        this.initQuizzes();
    }

    initQuizzes() {
        const quizzes = this.modal.querySelectorAll('.quiz');
        quizzes.forEach(quiz => {
            const options = quiz.querySelectorAll('.quiz__option');
            const resultCorrect = quiz.querySelector('.quiz__result--correct');
            const resultIncorrect = quiz.querySelector('.quiz__result--incorrect');

            options.forEach(option => {
                option.addEventListener('click', () => {
                    // Reset all options
                    options.forEach(o => {
                        o.classList.remove('is-selected', 'is-correct', 'is-incorrect');
                    });

                    // Mark selected
                    option.classList.add('is-selected');

                    // Check answer
                    const isCorrect = option.dataset.correct === 'true';
                    
                    if (isCorrect) {
                        option.classList.add('is-correct');
                        if (resultCorrect) {
                            resultCorrect.classList.add('is-visible');
                        }
                        if (resultIncorrect) {
                            resultIncorrect.classList.remove('is-visible');
                        }
                    } else {
                        option.classList.add('is-incorrect');
                        if (resultIncorrect) {
                            resultIncorrect.classList.add('is-visible');
                        }
                        if (resultCorrect) {
                            resultCorrect.classList.remove('is-visible');
                        }
                    }
                });
            });
        });
    }
}

/**
 * Lesson Viewer Component
 */
class LessonViewer {
    constructor() {
        this.modal = new Modal({ closeOnOverlay: false });
        this.currentChapter = null;
        this.currentLesson = null;
        this.progress = {};

        this.loadProgress();
        this.bindEvents();
    }

    bindEvents() {
        // Delegate click events for lesson items
        document.addEventListener('click', (e) => {
            const lessonItem = e.target.closest('.lesson-item');
            if (lessonItem) {
                e.preventDefault();
                const chapterId = lessonItem.closest('.accordion__item').dataset.chapter;
                const lessonId = lessonItem.dataset.lesson;
                this.openLesson(chapterId, lessonId);
            }
        });
    }

    openLesson(chapterId, lessonId) {
        const chapter = LessonData.getChapter(chapterId);
        const lesson = LessonData.getLesson(chapterId, lessonId);

        if (!chapter || !lesson) {
            console.error('Lesson not found:', chapterId, lessonId);
            return;
        }

        this.currentChapter = chapterId;
        this.currentLesson = lessonId;

        const lessons = LessonData.getChapterLessons(chapterId);
        const currentIndex = lessons.findIndex(l => l.id === lesson.id);
        const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
        const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

        const progressPercent = this.calculateProgress(chapterId);

        const content = `
            <div class="modal__header">
                <div class="modal__header-left">
                    <div class="modal__chapter-badge">${String(chapterId).padStart(2, '0')}</div>
                    <div class="modal__title-group">
                        <span class="modal__subtitle">Chapter ${chapterId}: ${chapter.title}</span>
                        <h2 class="modal__title">${lesson.icon} ${lesson.title}</h2>
                    </div>
                </div>
                <button class="modal__close" aria-label="閉じる">✕</button>
            </div>
            <div class="modal__body">
                <div class="lesson">
                    <div class="lesson__header">
                        <div class="lesson__meta">
                            <span>⏱️ ${lesson.duration}</span>
                            <span>📖 Lesson ${lessonId}</span>
                        </div>
                    </div>
                    <div class="lesson__content">
                        ${lesson.content}
                    </div>
                    <div class="lesson-nav">
                        ${prevLesson ? `
                            <a href="#" class="lesson-nav__item lesson-nav__item--prev" data-chapter="${chapterId}" data-lesson="${currentIndex}">
                                <span class="lesson-nav__arrow">←</span>
                                <div>
                                    <div class="lesson-nav__label">前のレッスン</div>
                                    <div class="lesson-nav__title">${prevLesson.title}</div>
                                </div>
                            </a>
                        ` : '<div></div>'}
                        ${nextLesson ? `
                            <a href="#" class="lesson-nav__item lesson-nav__item--next" data-chapter="${chapterId}" data-lesson="${currentIndex + 2}">
                                <div>
                                    <div class="lesson-nav__label">次のレッスン</div>
                                    <div class="lesson-nav__title">${nextLesson.title}</div>
                                </div>
                                <span class="lesson-nav__arrow">→</span>
                            </a>
                        ` : '<div></div>'}
                    </div>
                </div>
            </div>
            <div class="modal__footer">
                <div class="modal__progress">
                    <div class="modal__progress-bar">
                        <div class="modal__progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <span class="modal__progress-text">${progressPercent}% 完了</span>
                </div>
                <div class="modal__nav">
                    <button class="btn btn--secondary btn--sm" onclick="lessonViewer.markComplete('${chapterId}', '${lessonId}')">
                        ✓ 完了にする
                    </button>
                </div>
            </div>
        `;

        this.modal.open(content, { size: 'large' });

        // Bind navigation
        this.bindNavigation();
    }

    bindNavigation() {
        const navItems = this.modal.modal.querySelectorAll('.lesson-nav__item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const chapterId = item.dataset.chapter;
                const lessonId = item.dataset.lesson;
                this.openLesson(chapterId, lessonId);
            });
        });
    }

    markComplete(chapterId, lessonId) {
        const key = `${chapterId}-${lessonId}`;
        this.progress[key] = true;
        this.saveProgress();

        // Update UI
        const lessonItem = document.querySelector(`.lesson-item[data-lesson="${lessonId}"]`);
        if (lessonItem) {
            lessonItem.classList.add('is-completed');
        }

        // Show feedback
        const btn = this.modal.modal.querySelector('.modal__nav .btn');
        if (btn) {
            btn.innerHTML = '✓ 完了しました！';
            btn.classList.remove('btn--secondary');
            btn.classList.add('btn--primary');
            btn.disabled = true;
        }

        // Update progress bar
        const progressPercent = this.calculateProgress(chapterId);
        const progressFill = this.modal.modal.querySelector('.modal__progress-fill');
        const progressText = this.modal.modal.querySelector('.modal__progress-text');
        if (progressFill) {
            progressFill.style.width = `${progressPercent}%`;
        }
        if (progressText) {
            progressText.textContent = `${progressPercent}% 完了`;
        }
    }

    calculateProgress(chapterId) {
        const lessons = LessonData.getChapterLessons(chapterId);
        if (lessons.length === 0) return 0;

        let completed = 0;
        lessons.forEach((lesson, index) => {
            const key = `${chapterId}-${index + 1}`;
            if (this.progress[key]) {
                completed++;
            }
        });

        return Math.round((completed / lessons.length) * 100);
    }

    saveProgress() {
        Utils.storage.set('lesson-progress', this.progress);
    }

    loadProgress() {
        this.progress = Utils.storage.get('lesson-progress', {});
    }
}

/**
 * Chapter Overview Component
 */
class ChapterOverview {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        // Add click handler to chapter headers for overview
        document.querySelectorAll('.accordion__header').forEach(header => {
            const viewBtn = header.querySelector('.view-chapter-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const chapterId = header.closest('.accordion__item').dataset.chapter;
                    this.openOverview(chapterId);
                });
            }
        });
    }

    openOverview(chapterId) {
        const chapter = LessonData.getChapter(chapterId);
        if (!chapter) return;

        const lessons = LessonData.getChapterLessons(chapterId);
        
        const content = `
            <div class="modal__header">
                <div class="modal__header-left">
                    <div class="modal__chapter-badge">${String(chapterId).padStart(2, '0')}</div>
                    <div class="modal__title-group">
                        <span class="modal__subtitle">Chapter Overview</span>
                        <h2 class="modal__title">${chapter.title}</h2>
                    </div>
                </div>
                <button class="modal__close" aria-label="閉じる">✕</button>
            </div>
            <div class="modal__body">
                <div class="chapter-overview">
                    <div class="chapter-overview__main">
                        <h3>このチャプターで学ぶこと</h3>
                        <p>このチャプターでは、${chapter.title}について詳しく学びます。</p>
                        
                        <h3>レッスン一覧</h3>
                        <div class="lesson-list">
                            ${lessons.map((lesson, index) => `
                                <div class="lesson-item" data-lesson="${index + 1}" style="cursor: pointer;">
                                    <span class="lesson-item__icon">${lesson.icon}</span>
                                    <div class="lesson-item__content">
                                        <h4 class="lesson-item__title">${lesson.title}</h4>
                                        <p class="lesson-item__desc">⏱️ ${lesson.duration}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="chapter-overview__sidebar">
                        <div class="chapter-toc">
                            <h4 class="chapter-toc__title">目次</h4>
                            <ul class="chapter-toc__list">
                                ${lessons.map((lesson, index) => `
                                    <li class="chapter-toc__item">
                                        <a href="#" class="chapter-toc__link" data-lesson="${index + 1}">
                                            <span class="chapter-toc__icon">${lesson.icon}</span>
                                            ${lesson.title}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const modal = new Modal();
        modal.open(content, { size: 'full' });
    }
}

// Initialize global lesson viewer
let lessonViewer;

document.addEventListener('DOMContentLoaded', () => {
    lessonViewer = new LessonViewer();
});

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Modal, LessonViewer, ChapterOverview };
}
