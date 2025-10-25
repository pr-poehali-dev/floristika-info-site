import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const MinimalStyle = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Минималистичный стиль</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Искусство создания красоты через простоту
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/d8affe89-9ff6-4dde-8de9-9446e8c07443.jpg"
              alt="Минималистичная флористика"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Minimize2" className="text-primary" />
                  Принципы минимализма
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Минимум элементов, максимум выразительности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Чистые линии и простые формы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Ограниченная цветовая палитра</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Много свободного пространства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Акцент на качество, а не количество</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Leaf" className="text-primary" />
                  Любимые элементы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Один-три вида цветов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Монохромные букеты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Элегантная зелень</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Простые вазы и контейнеры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Натуральные материалы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant">Философия минимализма</CardTitle>
              <CardDescription>Меньше - значит больше</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Минималистичная флористика - это философия, основанная на японских принципах ваби-саби и скандинавской эстетике. 
                Этот стиль учит ценить красоту простоты и находить совершенство в несовершенстве.
              </p>
              <p>
                В минималистичных композициях каждый элемент имеет значение и играет важную роль. Здесь нет места случайности - 
                каждый цветок, каждая ветка, каждая линия тщательно продуманы. Пустое пространство так же важно, как и заполненное.
              </p>
              <p>
                Минималистичные букеты идеально подходят для современных интерьеров, деловых мероприятий и людей, ценящих 
                сдержанность и изящество. Они создают атмосферу спокойствия и гармонии, не перегружая пространство.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Target" className="text-primary" />
                Когда выбрать минимализм
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Home" size={18} className="text-primary" />
                    Для интерьера
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Минималистичные композиции прекрасно вписываются в современные интерьеры, не конкурируя с дизайном, а дополняя его.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Briefcase" size={18} className="text-primary" />
                    Для офиса
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Элегантные и сдержанные букеты создают профессиональную атмосферу без излишней пестроты.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Heart" size={18} className="text-primary" />
                    Для подарка
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Изысканный подарок для людей с утонченным вкусом, ценящих качество превыше количества.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Camera" size={18} className="text-primary" />
                    Для фотосессий
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Лаконичные композиции отлично смотрятся на фотографиях, не отвлекая внимание от главного объекта.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Palette" className="text-primary" />
                Цветовые решения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  </div>
                  <span className="text-muted-foreground">Белая чистота</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-green-700"></div>
                    <div className="w-12 h-12 rounded-full bg-green-600"></div>
                    <div className="w-12 h-12 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-muted-foreground">Зеленая гармония</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-stone-600"></div>
                    <div className="w-12 h-12 rounded-full bg-stone-400"></div>
                    <div className="w-12 h-12 rounded-full bg-stone-200"></div>
                  </div>
                  <span className="text-muted-foreground">Натуральные тона</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MinimalStyle;
