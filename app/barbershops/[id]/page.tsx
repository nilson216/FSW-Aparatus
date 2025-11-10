import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import {
  PageContainer,
  PageSection,
  PageSectionTitle,
} from "@/app/_components/ui/page";
import { ServiceItem } from "@/app/_components/service-item";
import Footer from "@/app/_components/footer";
import { CopyPhoneButton } from "@/app/_components/copy-phone-button";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Separator } from "@/app/_components/ui/separator";

interface BarbershopPageProps {
  params: Promise<{ id: string }>;
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const { id } = await params;

  const barbershop = await prisma.barbershop.findUnique({
    where: { id },
    include: { services: true },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen bg-background">
      {/* ===== Imagem de capa ===== */}
      <div className="relative w-full h-[280px]">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          priority
          className="object-cover brightness-90"
        />

        {/* Gradiente para suavizar o topo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Botão voltar sobreposto */}
        <div className="absolute top-4 left-4 z-20">
          <Link href="/">
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              <ArrowLeftIcon />
            </Button>
          </Link>
        </div>
      </div>

      {/* ===== Conteúdo principal ===== */}
      <div className="relative z-10 -mt-6 rounded-t-3xl bg-background shadow-lg">
        <PageContainer>
          {/* Nome e endereço */}
          <PageSection>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={barbershop.imageUrl} alt={barbershop.name} />
              </Avatar>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {barbershop.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {barbershop.address}
                </p>
              </div>
            </div>
          </PageSection>

          <Separator />

          {/* Sobre nós */}
          <PageSection>
            <PageSectionTitle>Sobre Nós</PageSectionTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {barbershop.description}
            </p>
          </PageSection>

          <Separator />

          {/* Serviços */}
          <PageSection>
            <PageSectionTitle>Serviços</PageSectionTitle>
            <div className="flex flex-col gap-3">
              {barbershop.services.map((service) => (
                <ServiceItem
                  key={service.id}
                  service={{
                    ...service,
                    barbershop,
                  }}
                />
              ))}
            </div>
          </PageSection>

          <Separator />

          {/* Contato */}
          <PageSection>
            <PageSectionTitle>Contato</PageSectionTitle>
            <div className="flex flex-col gap-2">
              {barbershop.phones?.map((phone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-muted/30 p-2"
                >
                  <p className="text-sm text-foreground">{phone}</p>
                  <CopyPhoneButton phone={phone} />
                </div>
              ))}
            </div>
          </PageSection>
        </PageContainer>
      </div>

      <Footer />
    </main>
  );
};

export default BarbershopPage;
