import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-foreground mb-6">
                Мир цветов и искусства
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Откройте для себя волшебный мир флористики — от классических композиций до современных трендов. 
                Узнайте о разных стилях, уходе за растениями и создании неповторимых букетов.
              </p>
              <div className="flex gap-4">
                <Link to="/styles/classic">
                  <Button className="bg-primary hover:bg-primary/90">
                    Изучить стили
                  </Button>
                </Link>
                <Link to="/encyclopedia/popular">
                  <Button variant="outline">
                    Энциклопедия цветов
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
                alt="Букет пионов"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-12">Разделы сайта</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/styles/classic">
              <Card className="hover:shadow-lg transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name="Palette" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold mb-3">Стили флористики</h3>
                  <p className="text-muted-foreground mb-4">
                    Познакомьтесь с классическим, современным и минималистичным стилями. Изучите их особенности и найдите свой.
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2">
                    Узнать больше <Icon name="ArrowRight" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/encyclopedia/popular">
              <Card className="hover:shadow-lg transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name="BookOpen" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold mb-3">Энциклопедия цветов</h3>
                  <p className="text-muted-foreground mb-4">
                    Каталог популярных и редких цветов. Узнайте о сезонности растений и их особенностях.
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2">
                    Узнать больше <Icon name="ArrowRight" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/care/plants">
              <Card className="hover:shadow-lg transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name="Sprout" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold mb-3">Уход за цветами</h3>
                  <p className="text-muted-foreground mb-4">
                    Практические советы по уходу за комнатными растениями и срезанными цветами для долгой свежести.
                  </p>
                  <div className="text-primary font-semibold flex items-center gap-2">
                    Узнать больше <Icon name="ArrowRight" size={18} />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/gallery/flowers">
              <Card className="hover:shadow-lg transition-all overflow-hidden h-full">
                <img
                  src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/9567d347-c07b-4ebb-8068-e30fdc1046fb.jpg"
                  alt="Галерея цветов"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-cormorant font-semibold mb-2">Галерея цветов</h3>
                  <p className="text-muted-foreground">Фотографии различных видов цветов крупным планом</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/gallery/bouquets">
              <Card className="hover:shadow-lg transition-all overflow-hidden h-full">
                <img
                  src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
                  alt="Галерея букетов"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-cormorant font-semibold mb-2">Галерея букетов</h3>
                  <p className="text-muted-foreground">Коллекция прекрасных флористических композиций</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">Начните своё путешествие</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучите инструменты флориста или свяжитесь с нами для консультации
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/tools">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Инструменты флориста
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
