import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ClassicStyle = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Классический стиль</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Традиционное искусство флористики, проверенное временем
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
              alt="Классическая флористика"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Flower2" className="text-primary" />
                  Основные черты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Симметричная композиция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Пышные, объемные букеты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Традиционные формы: круглая, овальная</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Богатая цветовая палитра</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Использование зелени для обрамления</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" />
                  Популярные цветы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Flower" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Розы всех оттенков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Flower" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Пионы и хризантемы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Flower" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Лилии и гладиолусы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Flower" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Гвоздики и герберы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Flower" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Альстромерии и фрезии</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant">История и философия</CardTitle>
              <CardDescription>Классическая флористика уходит корнями в викторианскую эпоху</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Классический стиль флористики сформировался в XIX веке и отражает традиционные представления о красоте и гармонии. 
                Этот стиль характеризуется строгими канонами композиции, симметрией и использованием проверенных временем сочетаний.
              </p>
              <p>
                В основе классической флористики лежит принцип равновесия и пропорциональности. Каждый элемент букета имеет свое место 
                и назначение, создавая гармоничную и завершенную композицию. Особое внимание уделяется выбору цветов, их сочетаемости 
                по оттенкам и формам.
              </p>
              <p>
                Классические букеты идеально подходят для торжественных случаев: свадеб, юбилеев, официальных мероприятий. 
                Они символизируют уважение, достоинство и вечные ценности.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Palette" className="text-primary" />
                Цветовые сочетания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red-500"></div>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300"></div>
                    <div className="w-12 h-12 rounded-full bg-pink-300"></div>
                  </div>
                  <span className="text-muted-foreground">Красно-белая классика</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-purple-500"></div>
                    <div className="w-12 h-12 rounded-full bg-pink-400"></div>
                    <div className="w-12 h-12 rounded-full bg-yellow-300"></div>
                  </div>
                  <span className="text-muted-foreground">Яркая гармония</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-yellow-400"></div>
                    <div className="w-12 h-12 rounded-full bg-orange-400"></div>
                    <div className="w-12 h-12 rounded-full bg-red-400"></div>
                  </div>
                  <span className="text-muted-foreground">Теплая палитра</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ClassicStyle;
