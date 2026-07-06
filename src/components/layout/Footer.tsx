export default function Footer() {
    return (
        <footer className="border-t border-slate-700 py-8">
            <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-400">
                <p>© {new Date().getFullYear()} Tim Nelson. Built with React, TypeScript & Tailwind CSS.</p>
            </div>
        </footer>
    );
}
