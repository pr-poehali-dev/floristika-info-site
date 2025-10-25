import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-2xl font-cormorant font-bold text-primary">Искусство Флористики</h1>
            </Link>
            <div className="hidden lg:flex gap-6 items-center">
              <Link to="/" className={`text-sm transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                Главная
              </Link>
              
              <div className="relative group">
                <button className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Стили
                  <Icon name="ChevronDown" size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/styles/classic" className="block px-4 py-2 text-sm hover:bg-muted">Классический</Link>
                  <Link to="/styles/modern" className="block px-4 py-2 text-sm hover:bg-muted">Современный</Link>
                  <Link to="/styles/minimal" className="block px-4 py-2 text-sm hover:bg-muted">Минимализм</Link>
                  <Link to="/styles/comparison" className="block px-4 py-2 text-sm hover:bg-muted">Сравнение стилей</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Энциклопедия
                  <Icon name="ChevronDown" size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/encyclopedia/seasonal" className="block px-4 py-2 text-sm hover:bg-muted">Сезонность цветов</Link>
                  <Link to="/encyclopedia/popular" className="block px-4 py-2 text-sm hover:bg-muted">Популярные цветы</Link>
                  <Link to="/encyclopedia/rare" className="block px-4 py-2 text-sm hover:bg-muted">Редкие растения</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Уход
                  <Icon name="ChevronDown" size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/care/plants" className="block px-4 py-2 text-sm hover:bg-muted">Комнатные растения</Link>
                  <Link to="/care/cut-flowers" className="block px-4 py-2 text-sm hover:bg-muted">Срезанные цветы</Link>
                </div>
              </div>

              <div className="relative group">
                <button className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Галерея
                  <Icon name="ChevronDown" size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link to="/gallery/flowers" className="block px-4 py-2 text-sm hover:bg-muted">Фото цветов</Link>
                  <Link to="/gallery/bouquets" className="block px-4 py-2 text-sm hover:bg-muted">Фото букетов</Link>
                </div>
              </div>

              <Link to="/tools" className={`text-sm transition-colors ${isActive('/tools') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}>
                Инструменты
              </Link>
              
              <Link to="/contact">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="py-8 px-4 bg-foreground text-white mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-cormorant font-bold mb-4">Искусство Флористики</h3>
              <p className="text-sm opacity-80">Познайте мир цветов и флористического искусства</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Стили</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link to="/styles/classic" className="block hover:opacity-100">Классический</Link>
                <Link to="/styles/modern" className="block hover:opacity-100">Современный</Link>
                <Link to="/styles/minimal" className="block hover:opacity-100">Минимализм</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Энциклопедия</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link to="/encyclopedia/seasonal" className="block hover:opacity-100">Сезонность</Link>
                <Link to="/encyclopedia/popular" className="block hover:opacity-100">Популярные</Link>
                <Link to="/encyclopedia/rare" className="block hover:opacity-100">Редкие</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ресурсы</h4>
              <div className="space-y-2 text-sm opacity-80">
                <Link to="/care/plants" className="block hover:opacity-100">Уход за растениями</Link>
                <Link to="/tools" className="block hover:opacity-100">Инструменты</Link>
                <Link to="/contact" className="block hover:opacity-100">Контакты</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm opacity-80">© 2024 Искусство Флористики. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
