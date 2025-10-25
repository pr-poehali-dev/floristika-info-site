import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ModernStyle = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Современный стиль</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Инновационный подход к флористическому дизайну
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/9567d347-c07b-4ebb-8068-e30fdc1046fb.jpg"
              alt="Современная флористика"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Zap" className="text-primary" />
                  Ключевые особенности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Асимметричные композиции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Смелые цветовые контрасты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Необычные формы и линии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Использование нетрадиционных материалов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Экспериментальные техники</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" />
                  Материалы и элементы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Экзотические цветы и растения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Декоративные ветки и коряги</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Стекло, металл, пластик</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Суккуленты и воздушные растения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Необычные контейнеры</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant">Философия современного дизайна</CardTitle>
              <CardDescription>Креативность без границ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Современный стиль флористики появился в конце XX века как реакция на строгие каноны классической школы. 
                Он отражает дух времени: динамичность, свободу самовыражения и стремление к инновациям.
              </p>
              <p>
                В основе современной флористики лежит принцип "нарушай правила осознанно". Флористы экспериментируют с формами, 
                сочетают несочетаемое, используют необычные материалы и создают композиции, которые часто выглядят как произведения 
                современного искусства.
              </p>
              <p>
                Современные букеты идеально подходят для креативных личностей, модных мероприятий, арт-пространств и тех, 
                кто хочет выделиться и удивить. Они говорят о смелости, индивидуальности и современном взгляде на мир.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="TrendingUp" className="text-primary" />
                Актуальные тренды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Монохромные композиции</h4>
                  <p className="text-sm text-muted-foreground">
                    Букеты в одном цвете, но с различными оттенками и текстурами создают изысканный и современный вид.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Графические линии</h4>
                  <p className="text-sm text-muted-foreground">
                    Четкие линии, геометрические формы и структурированность - визитная карточка современного стиля.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Воздушность</h4>
                  <p className="text-sm text-muted-foreground">
                    Минимум цветов, максимум пространства - композиции "дышат" и выглядят легко и изящно.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Эко-материалы</h4>
                  <p className="text-sm text-muted-foreground">
                    Использование натуральных, переработанных и экологичных материалов в декоре и упаковке.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Palette" className="text-primary" />
                Цветовые схемы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-black"></div>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                  </div>
                  <span className="text-muted-foreground">Монохромная элегантность</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-cyan-400"></div>
                    <div className="w-12 h-12 rounded-full bg-yellow-300"></div>
                    <div className="w-12 h-12 rounded-full bg-purple-500"></div>
                  </div>
                  <span className="text-muted-foreground">Неоновый контраст</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-500"></div>
                    <div className="w-12 h-12 rounded-full bg-emerald-700"></div>
                    <div className="w-12 h-12 rounded-full bg-emerald-300"></div>
                  </div>
                  <span className="text-muted-foreground">Градиент одного цвета</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ModernStyle;
