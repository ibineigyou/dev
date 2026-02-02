/**
 * Git & GitHub マスター講座
 * UI Components
 * @version 2.0.0
 */

/**
 * Accordion Component
 */
class Accordion {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' 
            ? document.querySelector(container) 
            : container;
        
        if (!this.container) return;

        this.options = {
            itemSelector: '.accordion__item',
            headerSelector: '.accordion__header',
            contentSelector: '.accordion__content',
            activeClass: 'is-active',
            allowMultiple: false,
            ...options
        };

        this.init();
    }

    init() {
        this.items = this.container.querySelectorAll(this.options.itemSelector);
        this.bindEvents();
        
        // Open first item by default
        if (this.items.length > 0) {
            this.open(this.items[0]);
        }
    }

    bindEvents() {
        this.items.forEach(item => {
            const header = item.querySelector(this.options.headerSelector);
            if (header) {
                header.addEventListener('click', () => this.toggle(item));
            }
        });
    }

    toggle(item) {
        const isActive = item.classList.contains(this.options.activeClass);
        
        if (!this.options.allowMultiple) {
            this.closeAll();
        }

        if (isActive) {
            this.close(item);
        } else {
            this.open(item);
        }
    }

    open(item) {
        item.classList.add(this.options.activeClass);
        const content = item.querySelector(this.options.contentSelector);
        if (content) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }

    close(item) {
        item.classList.remove(this.options.activeClass);
        const content = item.querySelector(this.options.contentSelector);
        if (content) {
            content.style.maxHeight = '0';
        }
    }

    closeAll() {
        this.items.forEach(item => this.close(item));
    }
}

/**
 * Tabs Component
 */
class Tabs {
    constructor(container, options = {}) {
        this.container = typeof container === 'string'
            ? document.querySelector(container)
            : container;

        if (!this.container) return;

        this.options = {
            triggerSelector: '.tabs__trigger',
            panelSelector: '.tabs__panel',
            activeClass: 'is-active',
            ...options
        };

        this.init();
    }

    init() {
        this.triggers = this.container.querySelectorAll(this.options.triggerSelector);
        this.panels = this.container.querySelectorAll(this.options.panelSelector);
        
        this.bindEvents();
        
        // Activate first tab
        if (this.triggers.length > 0) {
            this.activate(this.triggers[0].dataset.tab);
        }
    }

    bindEvents() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                this.activate(trigger.dataset.tab);
            });
        });
    }

    activate(tabId) {
        // Update triggers
        this.triggers.forEach(trigger => {
            trigger.classList.toggle(
                this.options.activeClass,
                trigger.dataset.tab === tabId
            );
        });

        // Update panels
        this.panels.forEach(panel => {
            panel.classList.toggle(
                this.options.activeClass,
                panel.id === `panel-${tabId}`
            );
        });
    }
}

/**
 * Code Block Component with Copy functionality
 */
class CodeBlock {
    constructor(container) {
        this.container = typeof container === 'string'
            ? document.querySelector(container)
            : container;

        if (!this.container) return;
        this.init();
    }

    init() {
        this.blocks = this.container.querySelectorAll('.code-block');
        this.blocks.forEach(block => this.setupCopyButton(block));
    }

    setupCopyButton(block) {
        const copyBtn = block.querySelector('.code-block__copy');
        const code = block.querySelector('code');

        if (!copyBtn || !code) return;

        copyBtn.addEventListener('click', async () => {
            const text = code.textContent;
            const success = await Utils.copyToClipboard(text);

            if (success) {
                this.showCopiedState(copyBtn);
            }
        });
    }

    showCopiedState(button) {
        const originalHTML = button.innerHTML;
        button.classList.add('copied');
        button.innerHTML = '<span>✓</span> コピー完了';

        setTimeout(() => {
            button.classList.remove('copied');
            button.innerHTML = originalHTML;
        }, 2000);
    }
}

/**
 * FAQ Accordion Component
 */
class FAQ {
    constructor(container) {
        this.container = typeof container === 'string'
            ? document.querySelector(container)
            : container;

        if (!this.container) return;
        this.init();
    }

    init() {
        this.items = this.container.querySelectorAll('.faq-item');
        this.bindEvents();
    }

    bindEvents() {
        this.items.forEach(item => {
            const question = item.querySelector('.faq-item__question');
            if (question) {
                question.addEventListener('click', () => this.toggle(item));
            }
        });
    }

    toggle(item) {
        const isActive = item.classList.contains('is-active');

        // Close all items
        this.items.forEach(i => {
            i.classList.remove('is-active');
            const answer = i.querySelector('.faq-item__answer');
            if (answer) answer.style.maxHeight = '0';
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('is-active');
            const answer = item.querySelector('.faq-item__answer');
            if (answer) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        }
    }
}

/**
 * Progress Bar Component
 */
class ProgressBar {
    constructor(element) {
        this.element = typeof element === 'string'
            ? document.querySelector(element)
            : element;

        if (!this.element) return;
        this.init();
    }

    init() {
        this.update();
        window.addEventListener('scroll', Utils.throttle(() => this.update(), 10));
    }

    update() {
        const percent = Utils.getScrollPercent();
        this.element.style.width = `${percent}%`;
    }
}

/**
 * Back to Top Button Component
 */
class BackToTop {
    constructor(element, options = {}) {
        this.element = typeof element === 'string'
            ? document.querySelector(element)
            : element;

        if (!this.element) return;

        this.options = {
            threshold: 500,
            visibleClass: 'is-visible',
            ...options
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.checkVisibility();
    }

    bindEvents() {
        window.addEventListener('scroll', Utils.throttle(() => this.checkVisibility(), 100));
        this.element.addEventListener('click', () => this.scrollToTop());
    }

    checkVisibility() {
        const shouldShow = window.scrollY > this.options.threshold;
        this.element.classList.toggle(this.options.visibleClass, shouldShow);
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Header Scroll Effect Component
 */
class Header {
    constructor(element, options = {}) {
        this.element = typeof element === 'string'
            ? document.querySelector(element)
            : element;

        if (!this.element) return;

        this.options = {
            scrolledClass: 'is-scrolled',
            threshold: 50,
            ...options
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.checkScroll();
    }

    bindEvents() {
        window.addEventListener('scroll', Utils.throttle(() => this.checkScroll(), 50));
    }

    checkScroll() {
        const isScrolled = window.scrollY > this.options.threshold;
        this.element.classList.toggle(this.options.scrolledClass, isScrolled);
    }
}

/**
 * Smooth Scroll Navigation
 */
class SmoothScroll {
    constructor(options = {}) {
        this.options = {
            selector: 'a[href^="#"]',
            offset: 80,
            ...options
        };

        this.init();
    }

    init() {
        document.querySelectorAll(this.options.selector).forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
        });
    }

    handleClick(e, anchor) {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            Utils.scrollTo(target, this.options.offset);
        }
    }
}

/**
 * Reveal on Scroll Animation
 */
class ScrollReveal {
    constructor(options = {}) {
        this.options = {
            selector: '.reveal',
            activeClass: 'is-revealed',
            threshold: 100,
            ...options
        };

        this.init();
    }

    init() {
        this.elements = document.querySelectorAll(this.options.selector);
        this.checkElements();
        window.addEventListener('scroll', Utils.throttle(() => this.checkElements(), 100));
    }

    checkElements() {
        this.elements.forEach(element => {
            if (Utils.isInViewport(element, this.options.threshold)) {
                element.classList.add(this.options.activeClass);
            }
        });
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Accordion,
        Tabs,
        CodeBlock,
        FAQ,
        ProgressBar,
        BackToTop,
        Header,
        SmoothScroll,
        ScrollReveal
    };
}
