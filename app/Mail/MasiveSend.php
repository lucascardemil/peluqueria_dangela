<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MasiveSend extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user, $subject_message, $urlImage, $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject_message, $message, $urlImage, $user)
    {
        $this->subject_message = $subject_message;
        $this->message = $message;
        $this->urlImage = $urlImage;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Oferta de la Semana')
                ->markdown('mail.masive.index');
    }
}
