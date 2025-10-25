import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const StyleComparison = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Сравнение стилей</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Найдите идеальный стиль для ваших композиций
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="font-cormorant text-center">Классический</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
                  alt="Классический стиль"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Симметричные формы</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Пышные букеты</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Традиционные цветы</span>
                  </div>
                </div>
                <Link to="/styles/classic" className="block">
                  <Button className="w-full" variant="outline">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="font-cormorant text-center">Современный</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/9567d347-c07b-4ebb-8068-e30fdc1046fb.jpg"
                  alt="Современный стиль"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Асимметрия</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Смелые контрасты</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Экспериментальные формы</span>
                  </div>
                </div>
                <Link to="/styles/modern" className="block">
                  <Button className="w-full" variant="outline">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="font-cormorant text-center">Минималистичный</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/d8affe89-9ff6-4dde-8de9-9446e8c07443.jpg"
                  alt="Минималистичный стиль"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Простые линии</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Минимум элементов</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Элегантная сдержанность</span>
                  </div>
                </div>
                <Link to="/styles/minimal" className="block">
                  <Button className="w-full" variant="outline">Подробнее</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant text-center text-2xl">Детальное сравнение</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-cormorant text-lg">Характеристика</th>
                      <th className="text-center py-4 px-4 font-cormorant text-lg">Классический</th>
                      <th className="text-center py-4 px-4 font-cormorant text-lg">Современный</th>
                      <th className="text-center py-4 px-4 font-cormorant text-lg">Минималистичный</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Композиция</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Симметричная, округлая</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Асимметричная, динамичная</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Простая, лаконичная</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Количество цветов</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Много, пышно</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Среднее, эффектно</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Мало, изящно</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Цветовая гамма</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Богатая, гармоничная</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Контрастная, смелая</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Ограниченная, спокойная</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Материалы</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Традиционные</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Экспериментальные</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Натуральные, простые</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-semibold">Подходит для</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Торжества, свадьбы</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Арт-события, показы</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Офис, современный дом</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold">Сложность исполнения</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Средняя</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Высокая</td>
                      <td className="py-4 px-4 text-center text-sm text-muted-foreground">Средняя-высокая</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="HelpCircle" className="text-primary" />
                Как выбрать стиль?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Для особого случая</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Свадьба - классический или минимализм</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>День рождения - любой стиль по вкусу</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Корпоратив - современный или минимализм</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">По характеру</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Консервативный - классический</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Креативный - современный</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="ChevronRight" size={16} className="text-primary mt-1" />
                      <span>Утонченный - минимализм</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default StyleComparison;
